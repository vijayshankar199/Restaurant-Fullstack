from django.db import models
from django.utils import timezone
from django.db.models import Sum
from userlogin.models import user
from owner.models import menu


class Cart(models.Model):
    user = models.ForeignKey(user, on_delete=models.CASCADE)
    total_amount = models.IntegerField(default=0)
    date=models.DateField(default=timezone.now)


class CartItem(models.Model):
    cart = models.ForeignKey(Cart, on_delete=models.CASCADE, related_name="items")
    menu = models.ForeignKey(menu, on_delete=models.CASCADE)
    quantity = models.IntegerField()
    subtotal = models.IntegerField(blank=True)
    date=models.DateField(default=timezone.now)
    

    def save(self, *args, **kwargs):
        self.subtotal = self.quantity * self.menu.price
        super().save(*args, **kwargs)
        update_cart_total(self.cart)

    def delete(self, *args, **kwargs):
        cart = self.cart
        super().delete(*args, **kwargs)
        update_cart_total(cart)


def update_cart_total(cart):
    total = cart.items.aggregate(
        total=Sum('subtotal')
    )['total'] or 0

    cart.total_amount = total
    cart.save()
