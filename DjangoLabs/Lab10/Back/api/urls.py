from django.urls import path
from .views import *

urlpatterns = [
    path('', CheckView.index, name='home'),
    path('companies/', CompanysView.as_view()),
    path('companies/<int:id>/', CompanyByIdView.as_view()),
    path('companies/<int:id>/vacancies/', VacancyByCompaniesView.as_view()),
    path('vacancies/', VacanciesView.as_view()),
    path('vacancies/<int:id>/', VacancyByIdView.as_view()),
    path('vacancies/top_ten/', top_ten_vacancies),
    path('register/', RegisterApi.as_view()),
]
