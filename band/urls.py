from django.conf.urls import url
from . import views
from rest_framework.urlpatterns import format_suffix_patterns

app_name='band'

urlpatterns=[
    url(r'^$',views.all_bands,name='all_bands'),
    url(r'^(?P<pk>\d+)/$',views.band,name='band'),
    url(r'^api/(?P<band_id>\d+)/$',views.banddetail,name='detail'),
    url(r'^api/all/$',views.allapi,name='allapi'),
    url(r'^showAll/$',views.showAll,name='showAll'),
    url(r'^insertNew/$',views.insert,name='insert'),
]

# returns a URL pattern list which includes suffix patterns appended to each of the url patterns provided
urlpatterns=format_suffix_patterns(urlpatterns)