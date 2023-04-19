from django.http import HttpResponse
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import *
from .serializer import *


# Create your views here.
# class based, method based views

def index(request):
    return HttpResponse("I am learning Web Dev")


class ProductView(APIView):
    def get(self, request):
        products = Product.objects.all()
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)




class ProductByIdView(APIView):
    def get(self, request, id):
        product = Product.objects.filter(id=id).first()
        serializer = ProductSerializer(product)
        return Response(serializer.data)



class CategoriesView(APIView):
    def get(self, request):
        categories = Category.objects.all()
        serializer = CategorySerializer(categories, many=True)
        return Response(serializer.data)


class CategoryByIdView(APIView):
    def get(self, request, id):
        category = Category.objects.filter(id=id).first()
        serializer = CategorySerializer(category)
        return Response(serializer.data)


class ProductsByCategoryView(APIView):
    def get(self, request, id):
        products = Product.objects.filter(category_id=id)
        product_serializer = ProductSerializer(products, many=True)
        return Response(product_serializer.data)


# def index():
#     return HttpResponse("arwrawraw")