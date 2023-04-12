from django.forms import model_to_dict
from django.shortcuts import render

# Create your views here.
from django.http import JsonResponse
from django.shortcuts import get_object_or_404
from django.views.decorators.csrf import csrf_exempt
from rest_framework import status
from rest_framework.decorators import api_view

from .models import Company, Vacancy
from rest_framework.response import Response
from .serializer import *

@api_view(('GET',))
def companies(request):
    if request.method == 'GET':
        companies = Company.objects.all()
        serializer = CompanySerializer(companies,many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    else:
        return Response({'error': 'Invalid request method'})


@api_view(('GET',))
def company(request, id):
    if request.method == 'GET':
        company = get_object_or_404(Company, pk=id)
        data = {'company': model_to_dict(company)}
        return Response(data)
    else:
        return Response({'error': 'Invalid request method'})


@api_view(('GET',))
def company_vacancies(request, id):
    if request.method == 'GET':
        company = get_object_or_404(Company, pk=id)
        vacancies = company.vacancies.all()
        data = {'vacancies': list(vacancies.values())}
        return Response(data)
    else:
        return Response({'error': 'Invalid request method'})


@api_view(('GET',))
def vacancies(request):
    if request.method == 'GET':
        vacancies = Vacancy.objects.all()
        data = {'vacancies': list(vacancies.values())}
        return Response(data)
    else:
        return Response({'error': 'Invalid request method'})


@api_view(('GET',))
def vacancy(request, id):
    if request.method == 'GET':
        vacancy = get_object_or_404(Vacancy, pk=id)
        data = {'vacancy': model_to_dict(vacancy)}
        return Response(data)
    else:
        return Response({'error': 'Invalid request method'})


@api_view(('GET',))
def top_ten_vacancies(request):
    if request.method == 'GET':
        vacancies = Vacancy.objects.order_by('-salary')[:10]
        data = {'vacancies': list(vacancies.values())}
        return Response(data)
    else:
        return Response({'error': 'Invalid request method'})
