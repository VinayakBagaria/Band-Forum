from django.contrib import admin
from .models import Band


class BandAdmin(admin.ModelAdmin):
    list_display = ['pk','name','date_added']
    search_fields = ['name','date_added']


admin.site.register(Band,BandAdmin)


