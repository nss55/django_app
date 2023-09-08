from django import forms
from django.db import models
from .models import DisasterEntry,Village,Taluka
from. import choices


class DisasterForm(forms.ModelForm):
    send_to = forms.MultipleChoiceField(choices=choices.TEAM_CHOICES,widget=forms.CheckboxSelectMultiple())
    class Meta:
        model = DisasterEntry
        fields = ('disaster_type','wadi','village','taluka','send_to','created_by')
        widgets = {
            
            'created_by': forms.TextInput(attrs={'hidden':True}),
            
        }

        
           