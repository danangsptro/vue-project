<script setup>

import { ref } from 'vue';
import BtnDng from './components/Button.vue';
import BoxDng from './components/Box.vue'
import BtnBackDng from './components/Back.vue'
import StepperDng from './components/Stepper.vue'
import { Form, Field, ErrorMessage } from 'vee-validate';

import * as yup from 'yup';

const state = ref(0)
const checked = ref(false)
const total = ref(0)
const randomNumeric = ref(0)
const dataForm = ref({
  email: '',
  dropShiperName: '',
  phonenumber: '',
  dropShiperPhoneNumber: '',
  deliveryAddress: '',
  costOfGoods: 500000,
  dropShiping: 0,
  shipment: 0,
  labelShipment: '',
  payment: '-'
})

function sendAsDropshiper() {
  if (checked.value === false) {
    dataForm.value.dropShiping = 5900
  } else {
    dataForm.value.dropShiping = 0
  }
}

const schema = yup.object({
  email: yup.string().required().email(),
  phonenumber: yup.string().required(),
  dropshipperName: yup.string().required(),
  dropshipperPhonenumber: yup.string().required(),
});

function sum() {
  total.value = dataForm.value.dropShiping + dataForm.value.costOfGoods + dataForm.value.shipment
}

function shipmentDelivery($event) {
  if ($event === 'GO-SEND') {
    dataForm.value.labelShipment = $event
    dataForm.value.shipment = 15000
  } else if ($event === 'JNE') {
    dataForm.value.labelShipment = $event
    dataForm.value.shipment = 9000
  } else {
    dataForm.value.labelShipment = $event
    dataForm.value.shipment = 29000
  }
  sum()
}

function payment($event) {
  if ($event === 'e-Wallet') {
    dataForm.value.payment = $event
  } else if ($event === 'Bank Transfer') {
    dataForm.value.payment = $event
  } else {
    dataForm.value.payment = $event
  }
}

function randomOrderId() {
  let random_id = Math.ceil(Math.random() * 100000)
  randomNumeric.value = random_id
}

</script>

<template>
  <!-- Stapper 1 -->
  <div v-show="state == 0">
    <!-- Tracking -->
    <div class="grid grid-cols-3 gap-4 lg:mx-96 mx-auto mt-2 mt-10 ">
      <div class="flex justify-center py-1 py-4">
        <stepper-dng classes="bg-orange text-white">1</stepper-dng>
        <p class="mt-2 text-orange ml-2">Delivery</p>
      </div>
      <div class="flex justify-center py-1 py-4">
        <stepper-dng classes="bg-amber flex text-orange">2</stepper-dng>
        <p class="mt-2 text-orange ml-2">Payment</p>
      </div>
      <div class="flex justify-center py-1 py-4">
        <stepper-dng classes="bg-amber flex text-orange">3</stepper-dng>
        <p class="mt-2 mr-5 text-orange ml-2">Finish</p>
      </div>
    </div>
    <!-- Content -->
    <div class="bg-white container mx-auto mt-10 ">
      <div class="grid lg:grid-cols-3 justify-center flex p-8">
        <div class="mx-2 mt-5">
          <p class="text-4xl font-bold text-orange mb-10">Delivery details</p>
          <Form action="" :validation-schema="schema">
            <div class="mb-6">
              <Field type="email" id="username-success" name="email"
                class="bg-green-50 border border-gray500 text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-3.5 dark:bg-green-100 dark:border-green-400"
                placeholder="Email" v-model="dataForm.email" />
              <ErrorMessage name="email" />
            </div>
            <div class="mb-6">
              <Field type="number" name="phonenumber"
                class="bg-green-50 border border-gray500 text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-3.5 dark:bg-green-100 dark:border-green-400"
                placeholder="Phone Number" v-model="dataForm.phonenumber" />
              <ErrorMessage name="phonenumber" />
            </div>
            <textarea
              class="bg-green-50 border border-gray500 text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-3.5 dark:bg-green-100 dark:border-green-400"
              placeholder="Delivery Address" v-model="dataForm.deliveryAddress"></textarea>
          </form>
        </div>
        <div class="mx-2 mt-5">
          <div class="flex justify-end bg-gray-200 mb-6">
            <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
              <input type="checkbox" class="accent-green" @click="sendAsDropshiper" v-model="checked"> <span
                class="text-gray-600">Send as
                dropshipper</span>
            </div>
          </div>
          <div class="mb-6">
            <input type="text" id="username-success" :disabled="checked === false"
              class="bg-green-50 border border-gray500 text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-3.5 dark:bg-green-100 dark:border-green-400"
              placeholder="Dropshipper Name" v-model="dataForm.dropShiperName">
          </div>
          <div class="mb-6">
            <input type="number" id="username-success" :disabled="checked === false"
              class="bg-green-50 border border-gray500 text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-3.5 dark:bg-green-100 dark:border-green-400"
              placeholder="Dropshipper phone number" v-model="dataForm.dropShiperPhoneNumber">
          </div>
        </div>

        <div class="mx-2 mt-5 border-l-2 border-amber">
          <div class="ml-3">
            <p class="text-4xl font-bold text-orange mb-10">Summary</p>
            <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200 text-gray-600">
              10 Items Purshased
            </p>
            <div
              class="bg-white py-10 grid lg:grid-cols-2 lg:gap-2  md:grid-cols-4 md:gap-4 sm:grid-cols-2 sm:gap-2 xs:grid-cols-2 xs:gap-2 text-left container mx-auto px-4 mt-48 ">
              <!-- br 1 -->
              <p class="text-gray-600">Cost Of goods</p>
              <p><strong>{{ dataForm.costOfGoods.toLocaleString() }}</strong></p>
              <!-- br 2 -->
              <p class="text-gray-600">Dropshipping Fee</p>
              <p><strong>{{ dataForm.dropShiping.toLocaleString() }}</strong></p>
              <!-- br 3 -->
              <p class="text-2xl font-bold text-orange">Total</p>

              <p class="text-2xl font-bold text-orange">{{ total.toLocaleString() }}</p>
            </div>
            <div v-if="dataForm.email && dataForm.phonenumber && dataForm.deliveryAddress">
              <btn-dng
                classes="bg-orange text-white font-bold py-2 px-4 border border-blue-700 rounded min-w-full justify-center"
                @click="state = 1, sum()">
                Continue to Payment
              </btn-dng>
            </div>
            <div v-else>
              <button :disabled="!dataForm.email && !dataForm.phonenumber && !dataForm.deliveryAddress"
                class="bg-orangeBlue text-white font-bold py-2 px-4 border border-blue-700 rounded min-w-full justify-center  focus:outline-none"
                @click="state = 1, sum()">
                Continue to Payment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Stapper 2 -->
  <div v-show="state == 1">
    <!-- Tracking -->
    <div class="grid grid-cols-3 gap-4 lg:mx-96 mx-auto mt-2">
      <div class="flex justify-center py-1 py-4">
        <stepper-dng classes="bg-orange text-white">1</stepper-dng>
        <p class="mt-2 text-orange ml-2">Delivery</p>
      </div>
      <div class="flex justify-center py-1 py-4">
        <stepper-dng classes="bg-orange text-white">2</stepper-dng>
        <p class="mt-2 text-orange ml-2">Payment</p>
      </div>
      <div class="flex justify-center py-1 py-4">
        <stepper-dng classes="bg-amber text-orange">3</stepper-dng>
        <p class="mt-2 mr-5 text-orange ml-2">Finish</p>
      </div>
    </div>
    <!-- Content -->
    <div class="bg-white container mx-auto mt-10">
      <div class="mx-10">
        <br>
        <btn-back-dng @click="state = 0"> Back to cart</btn-back-dng>
      </div>
      <div class="grid lg:grid-cols-4 justify-center flex p-8 ">
        <div class="mx-2 mt-5 col-span-1 ">
          <p class="text-4xl font-bold text-orange mb-10">Shipment</p>
          <!-- GO-SEND -->
          <box-dng classes="focus:ring-green hover:ring-green min-w-full text-left py-2 px-4"
            @click="shipmentDelivery('GO-SEND')">
            <p> GO-SEND </p>
            <p class="font-bold"> 15,000 </p>
          </box-dng>
          <p class="text-4xl font-bold text-orange mb-10 mt-10">Payment</p>
          <div class="mb-6 ">
            <!-- e-Walet -->
            <box-dng classes="focus:ring-green hover:ring-green min-w-full text-left py-2 px-4"
              @click="payment('e-Wallet')">
              <p> e-Wallet </p>
              <p class="font-bold"> 15.000,000 left </p>
            </box-dng>
          </div>
        </div>
        <div class="mx-2 mt-5 col-span-1">
          <div class="flex justify-end bg-gray-200 mb-6 ">
            <div class="text-white text-center bg-gray-400 px-4 py-2 m-2">
              dropshipper
            </div>
          </div>
          <!-- JNE -->
          <box-dng classes="focus:ring-green hover:ring-green min-w-full text-left py-2 px-4"
            @click="shipmentDelivery('JNE')">
            <p> JNE </p>
            <p class="font-bold"> 9,000 </p>
          </box-dng>
          <p class="text-4xl font-bold text-white mb-10 mt-10">Payment</p>
          <!-- Bank Transfer -->
          <box-dng classes="focus:ring-green hover:ring-green min-w-full text-left py-2 px-4"
            @click="payment('Bank Transfer')">
            <p>Bank Transfer </p>
            <p class="text-white"> 15,000 </p>
          </box-dng>
        </div>
        <div class="mx-2 mt-5 col-span-1">
          <div class="flex justify-end bg-gray-200 mb-6 ">
            <div class="text-white text-center bg-gray-400 px-4 py-2 m-2">
              dropshipper
            </div>
          </div>
          <!-- Personal Courier -->
          <box-dng classes="focus:ring-green hover:ring-green min-w-full text-left py-2 px-4"
            @click="shipmentDelivery('Personal Courier')">
            <p> Personal Courier</p>
            <p class="font-bold"> 29,000</p>
          </box-dng>
          <p class="text-4xl font-bold text-white mb-10 mt-10">Payment</p>
          <div class="mb-6 ">
            <!-- Virtual Account -->
            <box-dng classes="focus:ring-green hover:ring-green min-w-full text-left py-2 px-4"
              @click="payment('Virtual Account')">
              <p> Virtual Account </p>
              <p class="text-white"> 15000 </p>
            </box-dng>
          </div>
        </div>
        <div class="mx-2 row-span-4 border-l-2 border-amber">
          <div class="ml-3">
            <p class="text-4xl font-bold text-orange mb-10">Summary</p>
            <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200 text-gray-600">
              10 Items Purshased
            </p>
            <hr class="border-gray500">

            <p class="mt-4 text-base dark:text-neutral-200">
              Delivery estimation
            </p>
            <p class="text-green text-base text-neutral-600 dark:text-neutral-200">
              Today by - {{ dataForm.labelShipment }}
            </p>
            <div
              class="bg-white py-10 grid lg:grid-cols-2 lg:gap-2  md:grid-cols-4 md:gap-4 sm:grid-cols-2 sm:gap-2 xs:grid-cols-2 xs:gap-2 text-left container mx-auto px-4 mt-48 ">
              <!-- br 1 -->
              <p class="text-gray-600">Cost Of goods</p>
              <p><strong>{{ dataForm.costOfGoods.toLocaleString() }}</strong></p>
              <!-- br 2 -->
              <p class="text-gray-600">Dropshipping Fee</p>
              <p><strong>{{ dataForm.dropShiping.toLocaleString() }}</strong></p>
              <!-- br 2 -->
              <p><strong>{{ dataForm.labelShipment }}</strong> - <span class="text-gray-600">Shipment</span></p>
              <p><strong>{{ dataForm.shipment.toLocaleString() }}</strong></p>
              <!-- br 3 -->
              <p class="text-2xl font-bold text-orange">Total</p>

              <p class="text-2xl font-bold text-orange">{{ total.toLocaleString() }}</p>
            </div>
            <div v-if="dataForm.labelShipment && dataForm.payment">
              <btn-dng classes="text-white font-bold py-2 px-4 border border-blue-700 rounded min-w-full justify-center"
                @click="state = 2, sum(), randomOrderId()">
                Payment with e-Wallet
              </btn-dng>
            </div>
            <div v-else>
              <button :disabled="!dataForm.email && !dataForm.phonenumber && !dataForm.deliveryAddress"
                class="bg-orangeBlue text-white font-bold py-2 px-4 border border-blue-700 rounded min-w-full justify-center  focus:outline-none"
                @click="state = 1, sum()">
                Continue to Payment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Stapper 3 -->
  <div v-show="state == 2">
    <!-- Tracking -->
    <div class="grid grid-cols-3 gap-4 lg:mx-96 mx-auto mt-2">
      <div class="flex justify-center py-1 py-4">
        <stepper-dng classes="bg-orange text-white">1</stepper-dng>
        <p class="mt-2 text-orange ml-2">Delivery</p>
      </div>
      <div class="flex justify-center py-1 py-4">
        <stepper-dng classes="bg-orange text-white">2</stepper-dng>
        <p class="mt-2 text-orange ml-2">Payment</p>
      </div>
      <div class="flex justify-center py-1 py-4">
        <stepper-dng classes="bg-orange text-white">3</stepper-dng>
        <p class="mt-2 mr-5 text-orange ml-2">Finish</p>
      </div>
    </div>
    <!-- Content -->
    <div class="bg-white container mx-auto mt-10">
      <div class="mx-10">
        <br>
        <div class="grid lg:grid-cols-3 justify-center flex p-8 ">
          <div class="col-span-2 py-40 ml-80 mt-10">
            <p class="text-4xl font-bold text-orange ">Thank You</p>
            <br>
            <p>Order ID : {{ randomNumeric }}</p>
            <p class="text-gray-500">Your order will be delivered today with - </p>
            <br>
            <br>
            <btn-back-dng @click="state = 1"> Go to homepage</btn-back-dng>
          </div>
          <div class="mx-2 row-span-4 border-l-2 border-amber">
            <div class="ml-3">
              <p class="text-4xl font-bold text-orange mb-10">Summary</p>
              <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200 text-gray-600">
                10 Items Purshased
              </p>
              <hr class="border-gray500">
              <p class="mt-4 text-base dark:text-neutral-200">
                Delivery estimation
              </p>
              <p class="text-green text-base text-neutral-600 dark:text-neutral-200 mb-4">
                Today by - {{ dataForm.labelShipment }}
              </p>
              <hr class="border-gray500">
              <p class="mt-4 text-base dark:text-neutral-200">
                Payment method
              </p>
              <p class="text-green text-base text-neutral-600 dark:text-neutral-200 mb-4">
                {{ dataForm.payment }}
              </p>
              <div
                class="bg-white py-10 grid lg:grid-cols-2 lg:gap-2  md:grid-cols-4 md:gap-4 sm:grid-cols-2 sm:gap-2 xs:grid-cols-2 xs:gap-2 text-left container mx-auto px-4 mt-48 ">
                <!-- br 1 -->
                <p class="text-gray-600">Cost Of goods</p>
                <p><strong>{{ dataForm.costOfGoods.toLocaleString() }}</strong></p>
                <!-- br 2 -->
                <p class="text-gray-600">Dropshipping Fee</p>
                <p><strong>{{ dataForm.dropShiping.toLocaleString() }}</strong></p>
                <!-- br 2 -->
                <p><strong>{{ dataForm.labelShipment }}</strong> - <span class="text-gray-600">Shipment</span></p>
                <p><strong>{{ dataForm.shipment.toLocaleString() }}</strong></p>
                <!-- br 3 -->
                <p class="text-2xl font-bold text-orange">Total</p>
                <p class="text-2xl font-bold text-orange">{{ total.toLocaleString() }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>