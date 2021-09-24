get{
    name : string
    featured : boolean
    new : boolean

    shortDescription : string
    description : string

    subCategory : [string, ]
    manufacturer : string
    
    bestSeller : boolean
    model3d: file

    discount : float
    rating: float

    variation : [
        {
            size: string
            material: string
            color: sky blue
            weight : string
            price: float
            gstPrice : "calculate automatically 18%"
        },
    ],

    image : [
        file,
        file,
        file,
    ]

    review : [
        {
            user: user
            rating: float
            comment: string
        },
    ]
}

post{
    name : string
    featured : boolean
    active : boolean
    new : boolean

   name = models.CharField(max_length=25)
    active = models.BooleanField(default=True)
    shortDescription = models.CharField(max_length=2000)
    #rename to desc
    fullDescription = models.CharField(max_length=5000)
    careInstruction = models.CharField(max_length=1000)#TODO: it might affect in the frontend as the value should be in new line
    keyword = models.CharField(max_length=1000,null=True)
    size = models.CharField(max_length=100,null=True)
    weight = models.CharField(max_length=100,null=True)
    price = models.FloatField(default=0.0)
    # PRICE WITH GST
    sellingPrice = models.FloatField(default=0.0)
    #rename to subcategory
    category = models.CharField(max_length=100,null=True)
    color = models.CharField(max_length=100,null=True)
    material = models.CharField(max_length=100,null=True)
    manufacturer = models.CharField(max_length=100,null=True)
    featured = models.BooleanField(default=False)
    new = models.BooleanField(default=False)
    bestSeller = models.BooleanField(default=False)

    model3d =  models.FileField(null= True)

    addedDate = models.DateField(auto_now_add=True)
    modelFile = models.CharField(max_length=1000)

    shortDescription : string
    description : string

    subCategory : [string, ]
    manufacturer : string
    
    bestSeller : boolean
    model3d: file

    discount : float
    rating: float

    variation : [
        {
            size: string
            material: string
            color: sky blue
            weight : string
            price: float
            gstPrice : "calculate automatically 18%"
        },
    ],

    image : [
        file,
        file,
        file,
    ]
}