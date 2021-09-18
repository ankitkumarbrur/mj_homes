from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import *
import statistics
# Create your views here.

@api_view(['GET'])
def getProducts(request):
    try:
        products = Product.objects.all()
        productList = []
        for product in products:
            images = Image.objects.filter(product=product)
            imageList = []
            #TODO:variation iage
            reviews = Review.objects.filter(product=product)
            variations=[]
            for image in images:
                imageList.append(image.imageLink )

            prodVariation = ProductVariation.objects.filter(product=product)
            for var in prodVariation:
                variations.append({
                    "price":var.price,
                    'color':var.color,
                    "material":var.material
                })

            productList.append(
                {
                    "id":product.id,
                    "name":product.name,
                    "description":product.description,
                    "shortDescription":product.shortDescription,
                    "newProduct":product.newProduct,
                    "bestSeller":product.bestSeller,
                    "care":product.careInstruction,
                    "keyword":product.keyword,
                    "size":product.size,
                    "weight":product.weight,
                    "price":product.price,
                    "priceWithGST":product.sellingPrice,
                    "subcategory":[product.subcategory.name],
                    "color":product.color.color,
                    "material":product.material.material,
                    "manufacturer":product.manufacturer.name,
                    "image":imageList,
                    "featured":product.featured,
                    "dateAdded":product.addedDate,
                    "3dmodel":product.modelFile ,
                    "discount": product.discount,
                    "variations":variations
                    
                }
            )
        return Response({"product":productList},status=200)
    except Exception as e:
        return Response({"Error":"Have You missed any field i think so.... ==> "+str(e),},status=401)


@api_view(['GET'])
def getSpecificProducts(request):
    try:
        productId = request.data["productId"]
        product = Product.objects.get(id = productId)
        images = Image.objects.filter(product=product)
        imageList = []
        variations = []
        for image in images:
            imageList.append(image.imageLink )
        prodVariation = ProductVariation.objects.filter(product=product)
        for var in prodVariation:
            variations.append({
                "price":var.price,
                'color':var.color,
                "material":var.material
            })
        review = Review.objects.filter(product=product)
        avgcnt = review.__len__()
        rating = []
        for r in review:
            rating.append(r.reviewStar)
        ratingValue=0
        if rating.__len__()>0:
            ratingValue = statistics.mean(rating)
        
        data = {
            "id":product.id,
            "name":product.name,
            "description":product.description,
            "care":product.careInstruction,
            "keyword":product.keyword,
            "size":product.size,
            "weight":product.weight,
            "price":product.price,
            "rating":ratingValue,
            "priceWithGST":product.sellingPrice,
            "shortDescription":product.shortDescription,
            "newProduct":product.newProduct,
            "bestSeller":product.bestSeller,
            "subcategory":[product.subcategory.name],
            "color":product.color.color,
            "material":product.material.material,
            "manufacturer":product.manufacturer.name,
            "image":imageList,
            "featured":product.featured,
            "dateAdded":product.addedDate,
            "3dmodel":product.modelFile,
            "discount": product.discount,
            "variations":variations
            #TODO:Variation images
        }
        return Response({"product":data},status=200)
    except Exception as e:
        return Response({"Error":"Have You missed any field i think so.... ==> "+str(e),},status=401)


@api_view(['GET'])
def getCategory(request):
    catList = Category.objects.all()
    
    category= []
    for cat in catList:
        category.append({"id":cat.id,"name":cat.name})
    return Response({"category":category},status=200)


@api_view(['POST'])
def getCategoryProduct(request):
    catId = request.data["catid"]
    category = Category.objects.get(id=catId)
    # Product.objects.annotate()
    # products = Product.objects.filter(subcategory = category).annotate()
    products = Product.objects.all()
    productList = []
    for product in products:
        if product.subcategory.categoryId==category:
            images = Image.objects.filter(product=product)
            imageList = []
            for image in images:
                imageList.append(image.imageLink )
            productList.append(
                {
                    "id":product.id,
                    "name":product.name,
                    "description":product.description,
                    "care":product.careInstruction,
                    "keyword":product.keyword,
                    "size":product.size,
                    "weight":product.weight,
                    "price":product.price,
                    "priceWithGST":product.sellingPrice,
                    "shortDescription":product.shortDescription,
                    "newProduct":product.newProduct,
                    "bestSeller":product.bestSeller,
                    "subcategory":[product.subcategory.name],
                    "color":product.color.color,
                    "material":product.material.material,
                    "manufacturer":product.manufacturer.name,
                    "image":imageList,
                    "featured":product.featured,
                    "3dmodel":product.modelFile ,
                    "discount": product.discount,
                }
            )
    return Response({"product":productList},status=200)


@api_view(['POST'])
def searchProduct(request):
    searchText = request.data["searchText"]
    products = Product.objects.all()
    productResultList = []
    for product in products:
        if (searchText in product.name) or (searchText in product.keyword):
            images = Image.objects.filter(product=product)
            imageList = []
            for image in images:
                imageList.append(image.imageLink )
            productResultList.append(
            {
                    "id":product.id,
                    "name":product.name,
                    "description":product.description,
                    "care":product.careInstruction,
                    "keyword":product.keyword,
                    "size":product.size,
                    "weight":product.weight,
                    "price":product.price,
                    "priceWithGST":product.sellingPrice,
                    "shortDescription":product.shortDescription,
                    "newProduct":product.newProduct,
                    "bestSeller":product.bestSeller,
                    "subcategory":[product.subcategory.name],
                    "color":product.color.color,
                    "material":product.material.material,
                    "manufacturer":product.manufacturer.name,
                    "image":imageList,
                    "featured":product.featured,
                    "3dmodel":product.modelFile ,
                    "discount": product.discount,
            })
    return Response({"product":productResultList},status=200)
        