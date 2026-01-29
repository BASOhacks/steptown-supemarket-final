import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations, images, timeSlots } from '../data/mockData';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Card, CardContent } from './ui/card';
import { Truck, CheckCircle2 } from 'lucide-react';
import { toast } from 'sonner';

export const Delivery = () => {
  const { language } = useLanguage();
  const t = translations[language];
  
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    address: '',
    orderDetails: '',
    preferredTime: ''
  });

  const handleChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Mock form submission
    console.log('Delivery order submitted:', formData);
    
    // Show success message
    toast.success(t.deliverySuccess, {
      icon: <CheckCircle2 className="w-5 h-5" />
    });
    
    // Reset form
    setFormData({
      fullName: '',
      phoneNumber: '',
      address: '',
      orderDetails: '',
      preferredTime: ''
    });
  };

  return (
    <section id="delivery" className="py-20 bg-gradient-to-br from-blue-50 via-sky-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <img
                  src={images.delivery}
                  alt="Delivery Service"
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Decorative badge */}
              <div className="absolute -top-6 -right-6 bg-sky-600 text-white p-6 rounded-2xl shadow-xl transform rotate-6">
                <Truck className="w-12 h-12" />
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="order-1 lg:order-2 space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
                {t.deliveryTitle}
              </h2>
              <p className="text-xl text-gray-600">
                {t.deliverySubtitle}
              </p>
            </div>

            <Card className="shadow-xl border-none">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  {t.deliveryFormTitle}
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Full Name */}
                  <div className="space-y-2">
                    <Label htmlFor="fullName">{t.fullName} *</Label>
                    <Input
                      id="fullName"
                      type="text"
                      placeholder={t.enterName}
                      value={formData.fullName}
                      onChange={(e) => handleChange('fullName', e.target.value)}
                      required
                      className="h-12"
                    />
                  </div>

                  {/* Phone Number */}
                  <div className="space-y-2">
                    <Label htmlFor="phoneNumber">{t.phoneNumber} *</Label>
                    <Input
                      id="phoneNumber"
                      type="tel"
                      placeholder={t.enterPhone}
                      value={formData.phoneNumber}
                      onChange={(e) => handleChange('phoneNumber', e.target.value)}
                      required
                      className="h-12"
                    />
                  </div>

                  {/* Address */}
                  <div className="space-y-2">
                    <Label htmlFor="address">{t.address} *</Label>
                    <Input
                      id="address"
                      type="text"
                      placeholder={t.enterAddress}
                      value={formData.address}
                      onChange={(e) => handleChange('address', e.target.value)}
                      required
                      className="h-12"
                    />
                  </div>

                  {/* Order Details */}
                  <div className="space-y-2">
                    <Label htmlFor="orderDetails">{t.orderDetails} *</Label>
                    <Textarea
                      id="orderDetails"
                      placeholder={t.enterOrderDetails}
                      value={formData.orderDetails}
                      onChange={(e) => handleChange('orderDetails', e.target.value)}
                      required
                      className="min-h-24"
                    />
                  </div>

                  {/* Preferred Time */}
                  <div className="space-y-2">
                    <Label htmlFor="preferredTime">{t.preferredTime}</Label>
                    <Select
                      value={formData.preferredTime}
                      onValueChange={(value) => handleChange('preferredTime', value)}
                    >
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder={t.selectTime} />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((slot, index) => (
                          <SelectItem key={index} value={slot}>
                            {slot}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-sky-600 hover:bg-sky-700 text-white h-14 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
                  >
                    {t.submitOrder}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
