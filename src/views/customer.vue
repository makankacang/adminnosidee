<template>
    <div class="container-fluid position-relative d-flex p-0">
      <Spinner/>
  
      <Side/>
  
      <!-- Content Start -->
      <div class="content">
          <Navbar/>


          
        <!-- Table Start -->
            <div class="container-fluid pt-4 px-4">
         <!-- Buttons and Search Bar Start -->
        <div class="d-flex justify-content-between align-items-center mb-1">
            <div>
                <button class="btn btn-success" data-bs-toggle="modal" data-bs-target="#addDataModal">
                    <i class="bi bi-plus-circle-fill"></i> Add data
                  </button>
                  
                <!-- Add Data Modal -->
                <div class="modal fade" id="addDataModal" tabindex="-1" aria-labelledby="addDataModalLabel" aria-hidden="true" data-bs-backdrop="static" data-bs-keyboard="false">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="addDataModalLabel"><i class="bi bi-plus-circle-fill"></i> Add Customer</h5>
                            </div>
                            <div class="modal-body">
                                <div class="row">
                                    <!-- Form Section -->
                                    <div class="">
                                        <div class="mb-3">
                                            <label for="id" class="form-label">ID</label>
                                            <input type="text" class="form-control" v-model="id" name="id" id="id">
                                          </div>
                                          <div class="mb-3">
                                            <label for="name" class="form-label">Name</label>
                                            <input type="text" class="form-control" v-model="name" name="name" id="name">
                                          </div>
                                          <div class="mb-3">
                                            <label for="email" class="form-label">Email</label>
                                            <input type="text" class="form-control" v-model="email" name="email" id="email">
                                          </div>
                                          <div class="mb-3">
                                            <label for="phone" class="form-label">Phone</label>
                                            <input type="text" class="form-control" v-model="phone" name="phone" id="phone">
                                          </div>
                                          <div class="mb-3">
                                            <label for="status" class="form-label">Status</label>
                                            <input type="text" class="form-control" v-model="status" name="status" id="status">
                                          </div>
                                          
                                          <button type="button" class="btn btn-secondary" @click="resetForm" data-bs-dismiss="modal" aria-label="Close" style="width: 100%;">Cancel</button>
                                    <button type="button" class="btn btn-success" style="width: 100%;">Add</button>

                                </div>

                                <!-- Image Upload Section -->

                                                
                                    
                            </div>
                        </div>
                    </div>
                </div>
            </div>

              <!-- Filter Dropdown Button -->
              <div class="btn-group">
                <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                    <i class="bi bi-sort-down bi-2x"></i> Filter
                </button>
                <ul class="dropdown-menu" style="background-color: #FBFFFB; border: 2px solid #024D31;">
                        <h2 class="dropdown-header">Sort By:</h2>
                        <li>
                            <span class="dropdown-header-text">Default</span>
                            <div class="form-check">
                                <input class="form-check-input visually-hidden" type="radio" name="sortRadio" id="sortByDefaultNameRadio">
                                <label class="form-check-label custom-radio-label" for="sortByDefaultNameRadio"></label>
                            </div>
                        </li>
                        <li>
                            <span class="dropdown-header-text">First Name</span>
                            <div class="form-check">
                                <input class="form-check-input visually-hidden" type="radio" name="sortRadio" id="sortByFirstNameRadio">
                                <label class="form-check-label custom-radio-label" for="sortByFirstNameRadio"></label>
                            </div>
                        </li>
                        <li>
                            <span class="dropdown-header-text">Last Name</span>
                            <div class="form-check">
                                <input class="form-check-input visually-hidden" type="radio" name="sortRadio" id="sortByLastNameRadio">
                                <label class="form-check-label custom-radio-label" for="sortByLastNameRadio"></label>
                            </div>
                        </li>
                        <li>
                            <span class="dropdown-header-text">Alias</span>
                            <div class="form-check">
                                <input class="form-check-input visually-hidden" type="radio" name="sortRadio" id="sortByAliasNameRadio">
                                <label class="form-check-label custom-radio-label" for="sortByAliasNameRadio"></label>
                            </div>
                        </li>
                        <li>
                            <span class="dropdown-header-text">Status</span>
                            <div class="form-check">
                                <input class="form-check-input visually-hidden" type="radio" name="sortRadio" id="sortByStatusNameRadio">
                                <label class="form-check-label custom-radio-label" for="sortByStatusNameRadio"></label>
                            </div>
                        </li>
                        <!-- Add more items in a similar structure -->
                        <li><hr class="dropdown-divider"></li>
                        <h2 class="dropdown-header">Users:</h2>
                        <li>
                            <span class="dropdown-header-text">All</span>
                            <div class="form-check">
                                <input class="form-check-input visually-hidden" type="radio" name="userRadio" id="allUsersRadio">
                                <label class="form-check-label custom-radio-label" for="allUsersRadio"></label>
                            </div>
                        </li>
                        <li>
                            <span class="dropdown-header-text">Active</span>
                            <div class="form-check">
                                <input class="form-check-input visually-hidden" type="radio" name="userRadio" id="activeUsersRadio">
                                <label class="form-check-label custom-radio-label" for="activeUsersRadio"></label>
                            </div>
                        </li>
                        <li>
                            <span class="dropdown-header-text">Inactive</span>
                            <div class="form-check">
                                <input class="form-check-input visually-hidden" type="radio" name="userRadio" id="inactiveUsersRadio">
                                <label class="form-check-label custom-radio-label" for="inactiveUsersRadio"></label>
                            </div>
                        </li>
                        
                    </ul>
                </div>




            </div>
            <div class="input-group w-25">
                <input type="text" class="form-control" style="border: 2px solid #024D31;" placeholder="Search..." aria-label="Search" aria-describedby="button-addon2">
            </div>
        </div>
        <!-- Buttons and Search Bar End -->

        <!-- Table Start -->
                <div class="row g-4">
                    <div class="col-12">
                        <div class="faaa rounded h-100 p-1">
                            <div class="table-responsive rounded">
                                <table class="faaa1 table table-striped" style="background-color: #e3fbf2; color:">
                                    <thead>
                                        <tr style="background-color: #025B3A4D;">
                                            <th scope="col">ID</th>
                                            <th scope="col">NAME</th>
                                            <th scope="col">EMAIL</th>
                                            <th scope="col">PHONE</th>
                                            <th scope="col">STATUS</th>
                                            <th scope="col">ACTION</th>
                            
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(customer, index) in paginatedCustomer" :key="customer.id">
                                            <th scope="row">{{ customer.id }}</th>
                                            <td>{{ customer.name }}</td>
                                            <td>{{ customer.email }}</td>
                                            <td>{{ customer.phoneNumber }}</td>
                                            <td>{{ customer.status }}</td>
                                            <td>
                                                <button class="btn-lg btn-secondary btn-icon" data-bs-toggle="modal" data-bs-target="#EditModal" @click="editItem(index)"><i class="bi bi-pencil"></i></button>
                                                <button class="btn-lg btn-secondary btn-icon" data-bs-toggle="modal" data-bs-target="#DeleteModal" @click="deleteItem(index)"><i class="bi bi-trash"></i></button>
                                            </td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                            <!-- Pagination -->
                            <div class="d-flex justify-content-between align-items-center mt-3">
                                <div>
                                    <button class="btn btn-secondary" @click="previousPage" :disabled="currentPage === 1">Previous</button>
                                </div>
                                <div class="pagination-container d-flex align-items-center">
                                  <span style="margin-right: 5px;">Page</span>
                                  <input type="number" v-model="currentPage" class="form-control" style="width: 40px; margin-right: 5px;"> <!-- Input for Page Number -->
                                  <span>of</span>
                                  <span style="margin-left: 5px;">{{ totalPages }}</span> <!-- Total Pages -->
                               </div>
                                <div>
                                    <button class="btn btn-secondary" @click="nextPage" :disabled="currentPage === totalPages">Next</button>
                                </div>
                            </div>
                            <!-- End Pagination -->

                            <!-- Edit Modal -->
                            <div class="modal fade" id="EditModal" tabindex="-1" aria-labelledby="EditDataModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-dialog-centered">
                                <div class="modal-content">
                                    <div class="modal-header">
                                    <h5 class="modal-title" id="EditDataModalLabel"><i class="bi bi-pencil"></i> Edit Customer</h5>
                                    </div>
                                    <div class="modal-body">
                                        <div class="row">
                                            <!-- Form Section -->
                                             <div class="">
                                <div class="mb-3">
                                    <label for="id" class="form-label">ID</label>
                                    <input type="text" class="form-control" v-model="id" name="id" id="id">
                                  </div>
                                  <div class="mb-3">
                                    <label for="name" class="form-label">Name</label>
                                    <input type="text" class="form-control" v-model="name" name="name" id="name">
                                  </div>
                                  <div class="mb-3">
                                    <label for="email" class="form-label">Email</label>
                                    <input type="text" class="form-control" v-model="email" name="email" id="email">
                                  </div>
                                  <div class="mb-3">
                                    <label for="phone" class="form-label">Phone</label>
                                    <input type="text" class="form-control" v-model="phone" name="phone" id="phone">
                                  </div>
                                  <div class="mb-3">
                                    <label for="status" class="form-label">Status</label>
                                    <input type="text" class="form-control" v-model="status" name="status" id="status">
                                  </div>
                                  
                                  <button type="button" class="btn btn-secondary" @click="resetForm" data-bs-dismiss="modal" aria-label="Close" style="width: 100%;">Cancel</button>
                            <button type="button" class="btn btn-success" style="width: 100%;">Add</button>

                        </div>
                                            
                                <!-- Image Upload Section -->
                    
                                
                                
                                        </div>
                                    </div>
                                    
                
                                </div>
                                </div>
                            </div>

                                <!-- Delete Modal -->
                                <div class="modal fade" id="DeleteModal" tabindex="-1" aria-labelledby="DeleteDataModalLabel" aria-hidden="true">
                                    <div class="modal-dialog modal-dialog-centered">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="DeleteDataModalLabel"><i class="bi bi-trash"></i> Delete Customer</h5>
                                            </div>
                                            <div class="modal-body">
                                                <p class="align-items-center">Are you sure you want to delete this item?</p>
                                                <div class="d-flex justify-content-between align-items-center mt-3">
                                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                                                <button type="button" class="btn btn-danger">Delete</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                        </div>
                    </div>
                </div>
            </div>
        <!-- Table End -->





    </div>
    <!-- Content End -->


</div>


</template>

<script>
import Navbar from '@/components/nav.vue'
import Side from '@/components/side.vue'
import Spinner from '@/components/spinner.vue'
import axios from "axios";


export default {
    name: "customer",
    components: {
      Navbar,
      Side,
      Spinner,
    },
    data() {
        return {
            customer: [],
            imagePreview: null,
            id: '',
            name: '',
            email: '',
            phone: '',
            status: '',
            itemsPerPage: 5,
            currentPage: 1,
        };
    },

    computed: {
        paginatedCustomer() {
            const startIndex = (this.currentPage - 1) * this.itemsPerPage;
            const endIndex = startIndex + this.itemsPerPage;
            return this.customer.slice(startIndex, endIndex);
        },
        totalPages() {
            return Math.ceil(this.customer.length / this.itemsPerPage);
        },
    },

methods: {
    setCustomer(data) {
      this.customer = data;
    },

    showDeleteConfirmation(journalId) {
      this.deleteId = journalId;
    },



    previewImage(event) {
    const input = event.target;
    const file = input.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        // Set the preview image source to the data URL
        this.imagePreview = e.target.result;
      };

      reader.readAsDataURL(file);
    }
  },
  
  resetForm() {
      // Reset the input fields by setting the data properties to their initial values
      this.id = '';
      this.name = '';
      this.email = '';
      this.phone = '';
      this.status = '';
      this.imagePreview = null;
    },

    previousPage() {
            if (this.currentPage > 1) {
                this.currentPage--;
            }
        },
        nextPage() {
            if (this.currentPage < this.totalPages) {
                this.currentPage++;
            }
        },
        goToPage() {
            if (this.currentPage < 1) {
                this.currentPage = 1;
            } else if (this.currentPage > this.totalPages) {
                this.currentPage = this.totalPages;
            }
        },
  },

  mounted() {
    axios
      .get("http://localhost:3000/customer")
      .then((response) => this.setCustomer(response.data))
      .catch((error) => console.log(error));

      $('#addDataModal').on('hidden.bs.modal', () => {
        this.resetForm();
    });
  },

  };
</script>
