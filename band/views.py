from django.shortcuts import render
from .models import Band
from .serializers import BandSerializer,ErrorSerializer
from rest_framework import status
from rest_framework.response import Response
from django.http import HttpResponse
from rest_framework.decorators import api_view


# Create your views here.
def all_bands(request):
    return render(request,'band/all_bands.html')

def band(request,pk):
    # use get as we know exactly what id to get
    try:
        band = Band.objects.get(pk=pk)
        return render(request,'band/band.html',{"band":band})
    except:
        return HttpResponse("Not found")

@api_view(['GET','POST'])
def banddetail(request,band_id):
    if request.method == 'GET':
        snippets = Band.objects.filter(pk=band_id).values()
        serializer = BandSerializer(snippets, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = BandSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# just for me
@api_view(['GET','POST'])
def showAll(request):
    if request.method == 'GET':
        snippets = Band.objects.all()
        serializer = BandSerializer(snippets, many=True)
        print(type(serializer))
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = BandSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



@api_view(['POST'])
def insert(request):
    data=request.data

    try:
        bandNew=Band(name=data.get('name'),image=data.get('image'),bio=data.get('bio'))
        bandNew.save()
        error = False
    except:
        error=True

    errorObj = ErrorDec(error)
    serializer=ErrorSerializer(errorObj)
    return Response(serializer.data)



class ErrorDec(object):
    def __init__(self,error):
        self.error=error



@api_view(['GET'])
def allapi(request):
    snippets = Band.objects.all().values()
    serializer = BandSerializer(snippets, many=True)
    return Response(serializer.data)