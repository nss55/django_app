from django.db import models
from . import choices

# Create your models here.
class Taluka(models.Model):
    name = models.CharField(max_length=100,null=True,blank=True)

    def __str__(self) -> str:
        return str(self.name)

class Village(models.Model):
    taluka_name = models.ForeignKey(Taluka,on_delete=models.CASCADE,max_length=100,null=True,blank=True)
    name = models.CharField(max_length=100,null=True,blank=True)

    def __str__(self) -> str:
        return str(self.name)

class Wadi(models.Model):
    village_name = models.ForeignKey(Village,on_delete=models.CASCADE,max_length=100,null=True,blank=True)
    name = models.CharField(max_length=100,null=True,blank=True)

    def __str__(self) -> str:
        return str(self.name)

class DisasterEntry(models.Model):
    disaster_type = models.CharField(max_length=50,choices=choices.DISASTER_CHOICES,null=True,blank=False)
    taluka = models.ForeignKey(Taluka,on_delete=models.CASCADE,max_length=50,null=True,blank=False)
    village = models.ForeignKey(Village,on_delete=models.CASCADE,max_length=50,null=True,blank=False)
    wadi = models.ForeignKey(Wadi,on_delete=models.CASCADE,max_length=50,null=True,blank=False)
    send_to = models.CharField(max_length=500,null=True,blank=False,verbose_name=u"Teams")
    created_at = models.DateTimeField(auto_now_add=True,null=True)
    updated_at = models.DateTimeField(auto_now=True,null=True)
    created_by = models.CharField(max_length=500,null=True,blank=True,verbose_name=u"Created by")
    updated_by = models.CharField(max_length=500,null=True,blank=True,verbose_name=u"Updated by")

    def __str__(self) -> str:
        return str(self.taluka.name+"("+self.disaster_type+")")


