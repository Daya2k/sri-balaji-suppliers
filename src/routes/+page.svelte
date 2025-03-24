<script lang="ts">
    // You can update this array with your actual services
    const services:string[] = [
      "Wedding Mandapam Setup",
      "Sound and DJ Systems",
      "Lighting Decorations",
      "Chairs, Tables, and Utensils",
      "Shamiyana and Canopies",
      "Stage Decoration",
      "Event Planning Support",
      "Flower Arrangements"
    ];
  </script>
<main class="font-sans">
    <!-- Hero -->
    <section class="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-12 px-4 text-center shadow-lg">
      <h1 class="text-4xl sm:text-5xl font-extrabold">Sri Balaji Suppliers and Sounds</h1>
      <p class="text-xl sm:text-2xl mt-4 font-light">Complete Tent House Solutions in Tirupati</p>
    </section>
  
    <!-- Content -->
    <section class="max-w-5xl mx-auto px-4 py-12 space-y-12">
      <!-- Services -->
      <div>
        <h3 class="text-3xl font-semibold text-blue-800 mb-6">Our Services</h3>
        <ul class="grid sm:grid-cols-2 gap-6 text-gray-800">
          {#each services as service}
            <li class="bg-white border-l-4 border-blue-500 p-4 shadow rounded-lg">
              {service}
            </li>
          {/each}
        </ul>
      </div>
  
      <!-- Contact -->
      <div class="bg-blue-50 p-6 rounded-xl shadow">
        <h3 class="text-3xl font-semibold text-blue-800 mb-6">Contact Us</h3>
  
        <p class="mb-4">
          <strong>Address:</strong><br />
          <a
            href="https://www.google.com/maps/place/4-4-534,+Alipiri+Rd,+Giripuram,+Nehru+Nagar,+Tirupati,+Andhra+Pradesh+517501,+India"
            target="_blank"
            class="text-blue-700 underline"
          >
            <em>4-4-534, Alipiri Rd, Giripuram, Nehru Nagar, Tirupati, Andhra Pradesh 517501, India</em>
          </a>
        </p>
  
        <p class="mb-2">
          <strong>Phone:</strong>
          <a href="tel:+916281855788" class="text-blue-700 underline">+91 62818 55788</a>
        </p>
  
        <p class="mb-2">
          <strong>WhatsApp:</strong>
          <a href="https://wa.me/916281855788" target="_blank" rel="noopener noreferrer" class="text-green-700 underline">
            Chat Now
          </a>
        </p>
      </div>
    </section>
  </main>
  
  