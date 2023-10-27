<template>
  <div class="container-fluid position-relative d-flex p-0">
    <Spinner/>

    <Side/>

    <!-- Content Start -->
    <div class="content">
        <Navbar/>

        <!-- Sale & Revenue Start -->
        <div class="container-fluid pt-4 px-4">
            <div class="row g-4">
                <div class="col-sm-6 col-xl-3">
                    <div class="outer-rectangle faaa1 rounded p-3" style="background-color: #12BD7EB2;" >
                        <div class="inner-rectangle faaa rounded d-flex align-items-center justify-content-between p-4">
                            <i class="fa fa-list fa-3x faaa "></i>
                            <div class="ms-3">
                                <p class="mb-2">Repository</p>
                                <h6 class="mb-0">{{ totalRepositories }}</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-xl-3">
                    <div class="outer-rectangle faaa1 rounded p-3" style="background-color: #12BD7EB2;">
                      <div class="inner-rectangle faaa rounded d-flex align-items-center justify-content-between p-4">
                        <i class="fa fa-book fa-3x faaa"></i>
                        <div class="ms-3">
                          <p class="mb-2">Journal</p>
                          <h6 class="mb-0">{{ totalJournals }}</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                
                <div class="col-sm-6 col-xl-3">
                    <div class="outer-rectangle faaa1 rounded p-3" style="background-color: #12BD7EB2;">
                        <div class="inner-rectangle faaa rounded d-flex align-items-center justify-content-between p-4">
                            <i class="fa fa-table fa-3x faaa"></i>
                            <div class="ms-3">
                                <p class="mb-2">Conference</p>
                                <h6 class="mb-0">{{ totalConferences }}</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-xl-3">
                    <div class="outer-rectangle faaa1 rounded p-3" style="background-color: #12BD7EB2;">
                        <div class="inner-rectangle faaa rounded d-flex align-items-center justify-content-between p-4">
                            <i class="fa fa-user fa-3x faaa"></i>
                            <div class="ms-3">
                            <p class="mb-2">Customers</p>
                            <h6 class="mb-0">{{ totalCustomer }}</h6>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Sale & Revenue End -->


        
        <div class="container-fluid pt-4 px-4 mb-lg-4">
            <div class="row g-4">

        <!-- Recent Customer Start -->        
  <div class="col-sm-12 col-xl-6">
    <div class="faaa1 text-center rounded p-4">
      <div class="d-flex align-items-center justify-content-between mb-4">
        <h6 class="mb-0">Recent customer</h6>
      </div>
      <div class="table-responsive">
        <table class="table text-start align-middle table-borderless table-hover mb-0">
          <tbody>
            <tr v-for="(customer, index) in sortedCustomers" :key="customer.id">
              <td style="width: 33%;"><img src="darkpan\img\user.jpg" alt="Profile Picture" style="width: 48px; height: 48px; border-radius: 50%;"></td>
              <td style="width: 33%;">{{ customer.name }}</td>
            </tr>                                                                   
          </tbody>                               
        </table>
      </div>
    </div>
  </div>
  <!-- Recent Customer end -->
                

        <!-- Doughnut Chart start -->        
                    <div class="col-sm-12 col-xl-6">
                    <div class="faaa1 text-center rounded p-4">
                        <div class="d-flex align-items-center justify-content-between mb-4">
                            <h6 class="mb-0">Chart</h6>
                        </div>
                        <canvas id="doughnut-chart"></canvas>
                    </div>
                </div>
            </div>
        </div>
        <!-- Doughnut Chart End -->



    </div>
    <!-- Content End -->
</div>


</template>

<script>
import axios from "axios";
import Navbar from "@/components/nav.vue";
import Side from "@/components/side.vue";
import Spinner from "@/components/spinner.vue";

export default {
  components: {
    Navbar,
    Side,
    Spinner,
  },

  data() {
    return {
      repositories: [],
      journals: [],
      conferences: [],
      customer: [],
    };
  },

  methods: {
    setRepositories(data) {
      this.repositories = data;
    },

    setJournals(data) {
      this.journals = data;
    },

    setConferences(data) {
      this.conferences = data;
    },

    setCustomer(data) {
      this.customer = data;
    },
  },

  computed: {
    totalRepositories() {
      return this.repositories.length;
    },

    totalJournals() {
      return this.journals.length;
    },

    totalConferences() {
      return this.conferences.length;
    },

    totalCustomer() {
      return this.customer.length;
    },

    sortedCustomers() {
      // Sort the customer array by the id in descending order (newest to oldest)
      return this.customer.slice().sort((a, b) => b.id - a.id).slice(0, 7);
    },
  },

  mounted() {
    // Fetch data from the repositories endpoint
    axios
      .get("http://localhost:3000/repositories")
      .then((response) => {
        this.setRepositories(response.data);

        // Once repositories data is fetched, fetch data from the journal endpoint
        axios
          .get("http://localhost:3000/journal")
          .then((response) => {
            this.setJournals(response.data);

            // Once journals data is fetched, fetch data from the conference endpoint
            axios
              .get("http://localhost:3000/conference")
              .then((response) => {
                this.setConferences(response.data);

                axios
                  .get("http://localhost:3000/customer")
                  .then((response) => {
                    this.setCustomer(response.data);
                    console.log(response.data); // Log the customer data to the console

                    // Update the doughnut chart data with the fetched data
                    var ctx6 = document.getElementById("doughnut-chart").getContext("2d");
                    var myChart6 = new Chart(ctx6, {
                      type: "doughnut",
                      data: {
                        labels: ["Repository", "Journal", "Conference", "Customer"],
                        datasets: [
                          {
                            backgroundColor: ["#0C8D5E", "#12BD7E", "#49EFB1", "#A9F2D7"],
                            data: [
                              this.totalRepositories,
                              this.totalJournals,
                              this.totalConferences,
                              this.totalCustomer,
                            ],
                          },
                        ],
                      },
                      options: {
                        responsive: true,
                      },
                    });
                  })
                  .catch((error) => console.log(error));
              })
              .catch((error) => console.log(error));
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));
  },
};
</script>
