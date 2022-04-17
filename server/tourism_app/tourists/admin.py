from django.contrib import admin
from .models import User

# Register your models here.
class UserAdmin(admin.ModelAdmin):
    fields = ('username', 'email', 'password', 'profile_pic', 'mobile_number', 'country', 'address', 'is_tourist', 'is_agency', 'is_superuser', 'is_staff')

admin.site.register(User, UserAdmin)
