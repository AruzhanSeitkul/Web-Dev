from django.forms import model_to_dict
from django.http import HttpResponse
from django.shortcuts import render
from rest_framework import status, generics
from rest_framework.decorators import api_view
from rest_framework.generics import get_object_or_404
from rest_framework.permissions import IsAuthenticated, AllowAny, IsAdminUser
from rest_framework.response import Response
from rest_framework.status import HTTP_201_CREATED, HTTP_200_OK
from rest_framework.views import APIView
from .models import *
from .serializers import *


# Create your views here.
class CheckView(APIView):
    permission_classes = [IsAuthenticated]

    def index(request):
        return HttpResponse("Hello Rasul")


class CompanyByIdView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, id):
        prod = Company.objects.filter(id=id).first()
        serializer = CompanySerializer(prod)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, id):
        comp = Company.objects.filter(id=id).first()
        serializer = CompanySerializer(comp, data=request.data)
        if (serializer.is_valid()):
            serializer.save()
            return Response(serializer.data, status=status.HTTP_205_RESET_CONTENT)
        else:
            return serializer.errors

    def delete(self, request, id):
        com = Company.objects.filter(id=id).first()
        com.delete()
        return Response({'msg': 'deleted'}, status=status.HTTP_200_OK)


class VacancyByCompaniesView(APIView):
    def get(self, request, id):
        vaca = Vacancy.objects.filter(company__id=id)
        product_serializer = VacancySerializer(vaca, many=True)
        return Response(product_serializer.data, status=HTTP_200_OK)

    # def post(self, request, id):
    #     category = Category.objects.filter(id=id).first()
    #     product = Product(
    #         name=request.data["name"],
    #         price=request.data["price"],
    #         description=request.data["description"],
    #         count=request.data["count"],
    #         is_active=request.data["is_active"]
    #     )
    #     product.save()
    #     category.products.add(product)
    #     return Response( status=HTTP_201_CREATED)


class VacancyByIdView(APIView):
    def get(self, request, id):
        cat = Vacancy.objects.filter(id=id).first()
        serializer = VacancySerializer(cat)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, id):
        comp = Vacancy.objects.filter(id=id).first()
        serializer = VacancySerializer(comp, data=request.data)
        if (serializer.is_valid()):
            serializer.save()
            return Response(serializer.data, status=status.HTTP_205_RESET_CONTENT)
        else:
            return serializer.errors

    def delete(self, request, id):
        com = Vacancy.objects.filter(id=id).first()
        com.delete()
        return Response({'msg': 'deleted'}, status=status.HTTP_200_OK)


class CompanysView(APIView):
    permission_classes = (AllowAny,)
    authentication_classes = []

    def get(self, request):
        prod = Company.objects.all()
        serializer = CompanySerializer(prod, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = CompanySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.data)


class VacanciesView(APIView):
    permission_classes = (AllowAny,)
    authentication_classes = []
    def get(self, request):
        cat = Vacancy.objects.all()
        serializer = VacancySerializer(cat, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = VacancySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.data)


@api_view(('GET',))
def top_ten_vacancies(request):
    if request.method == 'GET':
        vacancies = Vacancy.objects.order_by('-salary')[:10]
        data = {'vacancies': list(vacancies.values())}
        return Response(data)
    else:
        return Response({'error': 'Invalid request method'})


class RegisterApi(generics.GenericAPIView):
    serializer_class = RegisterSerializer
    permission_classes = (AllowAny,)

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response(
            UserSerializer(user, context=self.get_serializer_context()).data,
        )
