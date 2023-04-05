from django.urls import path
from .views import *

urlpatterns = [
    path('', index, name='home'),
    path('products/', ProductView.as_view(), name='products'),
    path('products/<int:id>/', ProductByIdView.as_view(), name='product'),
    path('categories/', CategoriesView.as_view(), name='categories'),
    path('categories/<int:id>', CategoryByIdView.as_view(), name='category'),
    path('categories/<int:id>/products/', ProductsByCategoryView.as_view(), name='productsByCategory'),
]