"""tourism_app URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from rest_framework.schemas import get_schema_view
from django.views.generic import TemplateView
from rest_framework.documentation import include_docs_urls

from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
    path('admin/', admin.site.urls),
    path('tourists/', include('tourists.urls')),
    path('agencies/', include('agencies.urls')),
    path('services/', include('service.urls')),
    path('api_schema', get_schema_view(title='Tourism schema', description='API schema for tourism app'), name='api-schema'),
    # path('docs/', TemplateView.as_view(
    #     template_name='docs.html',
    #     extra_context={'schema_url':'api-schema'}
    #     ), name='swagger-ui'),
    path('docs/', include_docs_urls(title='My API title')),
]

urlpatterns += static(settings. MEDIA_URL, document_root=settings.MEDIA_ROOT)
