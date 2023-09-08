from django.contrib import admin
from .models import DisasterEntry,Taluka,Village,Wadi
# Register your models here.
admin.site.register(DisasterEntry)
admin.site.register(Taluka)
admin.site.register(Village)
admin.site.register(Wadi)