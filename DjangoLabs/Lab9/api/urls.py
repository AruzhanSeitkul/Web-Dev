from django.urls import path
from .views import companies, company, company_vacancies, vacancies, vacancy, top_ten_vacancies

urlpatterns = [
    path('companies/', companies),
    path('companies/<int:id>/', company),
    path('companies/<int:id>/vacancies/', company_vacancies),
    path('vacancies/', vacancies),
    path('vacancies/<int:id>/', vacancy),
    path('vacancies/top_ten/', top_ten_vacancies),
]
