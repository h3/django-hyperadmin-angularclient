from django.conf.urls.defaults import patterns, include, url
import hyperadmin
from angularclient.clients import AngularJSClient

admin_client = AngularJSClient(api_endpoint=hyperadmin.site)

urlpatterns = patterns('',
    url(r'^', include(admin_client.urls)),
)
