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
                                <h5 class="modal-title" id="addDataModalLabel"><i class="bi bi-plus-circle-fill"></i> Add Journal</h5>
                            </div>
                            <div class="modal-body">
                                <div class="row">
                                    <!-- Form Section -->
                                    <div class="col-md-6">
                                        <div class="mb-3">
                                            <label for="id" class="form-label">ID</label>
                                            <input type="text" class="form-control" v-model="id" name="id" id="id">
                                          </div>
                                          <div class="mb-3">
                                            <label for="name" class="form-label">Name</label>
                                            <input type="text" class="form-control" v-model="name" name="name" id="name">
                                          </div>
                                          <div class="mb-3">
                                            <label for="alias" class="form-label">Alias</label>
                                            <input type="text" class="form-control" v-model="alias" name="alias" id="alias">
                                          </div>
                                          <div class="mb-3">
                                            <label for="detail" class="form-label">Detail</label>
                                            <input type="text" class="form-control" v-model="detail" name="detail" id="detail">
                                          </div>
                                </div>

                                <!-- Image Upload Section -->
                                <div class="col-md-6 d-flex flex-column align-items-start">
                                    <div class="mb-3">
                                        <label for="image" class="image-upload-container" style="width: 225px; height: 185px; position: relative; overflow: hidden;">
                                            <input type="file" name="jurnalimage" class="form-control image-upload-input" id="imageInput" @change="previewImage">
                                            <div class="image-upload-text">IMG 500x500</div>
                                            <div class="image-upload-text" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">
                                                <img v-if="imagePreview" :src="imagePreview" alt="Image Preview" style="width: 100%; height: 100%;">
                                            </div>
                                        </label>
                                    </div>                                                    
                                    <button type="button" class="btn btn-secondary" @click="resetForm" data-bs-dismiss="modal" aria-label="Close" style="width: 100%;">Cancel</button>
                                    <button type="button" class="btn btn-success" style="width: 100%;">Add</button>
                                </div>
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
            <div class="input-group w-25 mb-2">
              <input type="text" class="form-control" style="border: 2px solid #024D31;" placeholder="Search..." aria-label="Search" aria-describedby="button-addon2" v-model="searchQuery">
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
                                            <th scope="col">DETAIL</th>
                                            <th scope="col">IMAGES</th>
                                            <th scope="col">ACTION</th>
                            
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="journals in displayedItems" :key="journals.id">
                                          <th scope="row">{{ journals.id }}</th>
                                          <td>{{ journals.jurnalName }}</td>
                                          <td>{{ journals.detailJurnal }}</td>
                                          <td>
                                            <img :src="'assets/images/' + journals.jurnalImages" alt="Journal Image" style="width: 50px; height: 70px;">
                                          </td>
                                          <td>
                                            <button class="btn-lg btn-secondary btn-icon" data-bs-toggle="modal" data-bs-target="#EditModal"><i class="bi bi-pencil"></i></button>
                                            <button class="btn-lg btn-secondary btn-icon" data-bs-toggle="modal" data-bs-target="#IndexModal"><i class="bi bi-plus"></i></button>
                                            <button class="btn-lg btn-secondary btn-icon" @click="showDeleteConfirmation(journals.id)" data-bs-toggle="modal" data-bs-target="#DeleteModal"><i class="bi bi-trash"></i></button>
                                          </td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                              <!-- Pagination -->
                              <div class="d-flex justify-content-between align-items-center mt-3">
                                <div>
                                    <button class="btn btn-secondary" @click="previousPage">Previous</button>
                                </div>
                                <div class="pagination-container d-flex align-items-center">
                                  <span style="margin-right: 5px;">Page</span>
                                  <input type="number" v-model="currentPage" class="form-control" style="width: 40px; margin-right: 5px;"> <!-- Input for Page Number -->
                                  <span>of</span>
                                  <span style="margin-left: 5px;">{{ totalPages }}</span> <!-- Total Pages -->
                               </div>
                                <div>
                                    <button class="btn btn-secondary" @click="nextPage">Next</button>
                                </div>
                            </div>
                            <!-- End Pagination -->

                             <!-- Edit Modal -->
                             <div class="modal fade" id="EditModal" tabindex="-1" aria-labelledby="EditDataModalLabel" aria-hidden="true">
                              <div class="modal-dialog modal-dialog-centered">
                              <div class="modal-content" style="text-align: left;">
                                  <div class="modal-header">
                                  <h5 class="modal-title" id="EditDataModalLabel"><i class="bi bi-pencil"></i> Edit Journal</h5>
                                  </div>
                                  <div class="modal-body">
                                  <div class="row">
                                      <!-- Form Section -->
                                      <div class="col-md-6">
                                      <div class="mb-3">
                                          <label for="id" class="form-label">ID</label>
                                          <input type="text" class="form-control" name="id">
                                      </div>
                                      <div class="mb-3">
                                          <label for="name" class="form-label">Name</label>
                                          <input type="text" class="form-control" name="name">
                                      </div>
                                      <div class="mb-3">
                                          <label for="alias" class="form-label">Alias</label>
                                          <input type="text" class="form-control" name="alias">
                                      </div>
                                      <div class="mb-3">
                                          <label for="detail" class="form-label">Detail</label>
                                          <input type="text" class="form-control" name="detail">
                                      </div>
                                      </div>
                          
                                      <!-- Image Upload Section -->
                                      <div class="col-md-6 d-flex flex-column align-items-start">
                                      <div class="mb-3">
                                          <label for="image" class="image-upload-container" style="width: 225px; height: 185px; position: relative; overflow: hidden;">
                                          <input type="file" name="jurnalimage" class="form-control image-upload-input" id="imageInput" @change="previewImage">
                                          <div class="image-upload-text">IMG 500x500</div>
                                          <div class="image-upload-text" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">
                                              <img v-if="imagePreview" :src="imagePreview" alt="Image Preview" style="width: 100%; height: 100%;">
                                          </div>
                                          </label>
                                      </div>
                                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" aria-label="Close" style="width: 100%;">Cancel</button>
                                      <button type="button" class="btn btn-success" style="width: 100%;">Add</button>
                                      </div>
                                  </div>
                                  </div>
                              </div>
                              </div>
                          </div>
                          
                          <!-- index Modal -->
                          <div class="modal fade" id="IndexModal" tabindex="-1" aria-labelledby="IndexDataModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered">
                              <div class="modal-content">
                                <div class="modal-header">
                                  <h5 class="modal-title" id="IndexDataModalLabel"><i class="bi bi-plus"></i> Add Index Journal</h5>
                                </div>
                                <div class="modal-body">
                                  <form>
                                  <div class="row mb-3 align-item-center">
                                    <div class="col-md-4">
                                      <label for="indexTitleInput" class="form-label">Title:</label>
                                      <input type="text" class="form-control" id="indexTitleInput" name="title" required>
                                    </div>
                                    <div class="col-md-4">
                                      <label for="indexImageInput" class="form-label">Image:</label>
                                      <input type="file" class="form-control" id="indexImageInput" @change="previewindexImage" required>
                                    </div>
                                    <div class="col-md-4">
                                      <label for="indexImageInput" class="form-label">Preview:</label>
                                      <div class="image-upload-index">
                                        <img :src="indeximagePreview" alt="Image Preview" class="img-preview" v-if="indeximagePreview" style="width: 60%;">
                                      </div>
                                    </div>
                                  </div>
                                  <div class="d-flex justify-content-end">
                                    <button type="submit" class="btn btn-secondary btn-sm">Save Index</button>
                                  </div>
                                  </form>

                                  <IndexForm v-for="(indexing, index) in indexForms" :key="index" :index="index" @delete="deleteIndexForm" />

                                  <hr class="my-4">

                                  <div class="mb-3">
                                    <div class="row justify-content-center">
                                      <button type="button" class="btn btn-secondary col-11" @click="addIndexForm">Add Other Indexing</button>
                                    </div>
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
                              <h5 class="modal-title" id="DeleteDataModalLabel"><i class="bi bi-trash"></i> Delete Journal</h5>
                              </div>
                              <div class="modal-body">
                              <p class="align-items-center">Are you sure you want to delete this item?</p>
                              <div class="d-flex justify-content-between align-items-center mt-3">
                                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                                  <button type="button" class="btn btn-danger" @click="deleteJournalEntry()">Delete</button>
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
import IndexForm from '@/components/indexform.vue';
import axios from "axios";

export default {
    name: "jurnal",
    components: {
      Navbar,
      Side,
      Spinner,
      IndexForm,
    },
    data() {
  return {
    journal: [],
    indexForms: [],
    searchQuery: '',
    deleteId: null,
    imagePreview: null,
    id: '',
    name: '',
    alias: '',
    detail: '',
     indeximagePreview: null,
    currentPage: 1,  // Current page number
    itemsPerPage: 5,  // Items per page
  };
},

computed: {
  displayedItems() {
    const filteredJournals = this.journal.filter((journal) => {
      // Filter journals based on search query
      const searchString = this.searchQuery.toLowerCase();
      return (
        journal.jurnalName.toLowerCase().includes(searchString) ||
        journal.detailJurnal.toLowerCase().includes(searchString) ||
        journal.id.toString().includes(searchString) // Include other fields if necessary
      );
    });

    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;

    return filteredJournals.slice(start, end);
  },
  
  totalPages() {
    return Math.ceil(this.journal.length / this.itemsPerPage);
  },
},


  methods: {
    setJournal(data) {
      this.journal = data;
    },

    addIndexForm() {
      // Push a new index form to the array
      this.indexForms.push({});
    },

    deleteIndexForm(index) {
      // Remove the index form at the specified index
      this.indexForms.splice(index, 1);
    },

    showDeleteConfirmation(journalId) {
      this.deleteId = journalId;
    },

    deleteJournalEntry() {
      if (this.deleteId) {
        axios
          .delete(`http://localhost:3000/journal/${this.deleteId}`)
          .then(() => {
            // Remove the deleted entry from the local state
            this.journal = this.journal.filter(journals => journals.id !== this.deleteId);
            $('#DeleteModal').modal('hide'); // Hide the modal after deletion
          })
          .catch((error) => console.error(error));
      }
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
  
        previewindexImage(event) {
        const input = event.target;
        const file = input.files[0];

        if (file) {
          const reader = new FileReader();

          reader.onload = (e) => {
            // Set the preview image source to the data URL
            this.indeximagePreview = e.target.result; // Change to indeximagePreview
          };

          reader.readAsDataURL(file);
        }
      },


  resetForm() {
      // Reset the input fields by setting the data properties to their initial values
      this.id = '';
      this.name = '';
      this.alias = '';
      this.detail = '';
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

  },
  mounted() {
    axios
      .get("http://localhost:3000/journal")
      .then((response) => this.setJournal(response.data))
      .catch((error) => console.log(error));

      $('#addDataModal').on('hidden.bs.modal', () => {
        this.resetForm();
    });
  },

};
</script>