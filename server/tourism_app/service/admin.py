from django.contrib import admin
from .models import destination

# Register your models here.


# Register your models here.
class destinationAdmin(admin.ModelAdmin):
    fields = ('destination_name', 'destination_description', 'destination_pic')

admin.site.register(destination, destinationAdmin)