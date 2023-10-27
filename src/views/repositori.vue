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
                                <h5 class="modal-title" id="addDataModalLabel"><i class="bi bi-plus-circle-fill"></i> Add Repository</h5>
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
                                            <label for="address" class="form-label">address</label>
                                            <input type="text" class="form-control" v-model="address" name="address" id="address">
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
            <div class="input-group w-25 mb-3">
                <input type="text" class="form-control" style="border: 2px solid #024D31;" v-model="searchQuery" @input="searchRepositories" placeholder="Search..." aria-label="Search" aria-describedby="button-addon2">
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
                                            <th scope="col">ADDRESS</th>
                                            <th scope="col">DETAIL</th>
                                            <th scope="col">IMAGES</th>
                                            <th scope="col">ACTION</th>
                            
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(repository, index) in paginatedFilteredRepository" :key="repository.id">
                                            <th scope="row">{{ repository.id }}</th>
                                            <td>{{ repository.name }}</td>
                                            <td>{{ repository.lokasi}}</td>
                                            <td>{{ repository.description }}</td>
                                            <td><img :src="'assets/images/' + repository.logo" alt="Repository Logo" style="width: 60px; height: 60px;"></td>
                                            <td>
                                                <button class="btn-lg btn-secondary btn-icon" data-bs-toggle="modal" data-bs-target="#EditModal" @click="editItem(index)"><i class="bi bi-pencil"></i></button>
                                                <button class="btn-lg btn-secondary btn-icon" data-bs-toggle="modal" data-bs-target="#ArticleModal" @click="articleItem(index)"><i class="bi bi-plus"></i></button>
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
                                            <h5 class="modal-title" id="EditDataModalLabel"><i class="bi bi-pencil"></i> Edit Repository</h5>
                                            </div>
                                            <div class="modal-body">
                                                <div class="row">
                                                    <!-- Form Section -->
                                                    <div class="col-md-6">
                                                        <div class="mb-3">
                                                            <label for="id" class="form-label">ID</label>
                                                            <input type="text" class="form-control" id="id">
                                                        </div>
                                                        <div class="mb-3">
                                                            <label for="name" class="form-label">Name</label>
                                                            <input type="text" class="form-control" id="name">
                                                        </div>
                                                        <div class="mb-3">
                                                            <label for="address" class="form-label">Address</label>
                                                            <input type="text" class="form-control" id="address">
                                                        </div>
                                                        <div class="mb-3">
                                                            <label for="detail" class="form-label">Detail</label>
                                                            <input type="text" class="form-control" id="detail">
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

                                    <!-- Article Modal -->
                                    <div class="modal fade" id="ArticleModal" tabindex="-1" aria-labelledby="ArticleDataModalLabel" aria-hidden="true">
                                        <div class="modal-dialog modal-dialog-centered">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h5 class="modal-title" id="ArticleDataModalLabel"><i class="bi bi-plus"></i>Add Article Repository</h5>
                                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div class="modal-body">
                                                    <form id="articleForm">
                                                        <div class="row mb-3">
                                                            <div class="col-md-6">
                                                                <label for="imageInput" class="form-label">Image</label>
                                                                <input type="file" class="form-control" id="imageInput" name="image" required>
                                                            </div>
                                                            <div class="col-md-6">
                                                                <label for="judulInput" class="form-label">Title:</label>
                                                                <input type="text" class="form-control" id="judulInput" name="title" required>
                                                            </div>
                                                        </div>
                                                        <div class="row mb-3">
                                                            <div class="col-md-6">
                                                                <label for="authorInput" class="form-label">Author:</label>
                                                                <input type="text" class="form-control" id="authorInput" name="author" required>
                                                            </div>
                                                            <div class="col-md-6">
                                                                <label for="tanggalInput" class="form-label">Date:</label>
                                                                <input type="date" class="form-control" id="tanggalInput" name="date" required>
                                                            </div>
                                                        </div>
                                                        <div class="mb-3">
                                                            <label for="deskripsiInput" class="form-label">Description:</label>
                                                            <textarea class="form-control" id="deskripsiInput" name="description" rows="3" required></textarea>
                                                        </div>
                                                        <div class="mb-3">
                                                            <label for="linkInput" class="form-label">Article Link:</label>
                                                            <input type="url" class="form-control" id="linkInput" name="link" required>
                                                        </div>
                                                        <div class="d-flex justify-content-end">
                                                        <button type="submit" class="btn btn-secondary">Add Article</button>
                                                        </div>
                                                    </form>

                                                    <article-form
                                                    v-for="(article, index) in articleForms"
                                                    :key="index"
                                                    :index="index"
                                                    @delete="deleteArticleForm(index)"
                                                />
                                                    <hr class="my-4">

                                                    <div class="mb-3" v-if="articleForms.length < 6">
                                                        <div class="row justify-content-center">
                                                          <button type="button" class="btn btn-secondary col-11" @click="addArticleForm"><i class="bi bi-plus"></i> Add other article</button>
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
                                                        <h5 class="modal-title" id="DeleteDataModalLabel"><i class="bi bi-trash"></i> Delete Repository</h5>
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
import ArticleForm from "@/components/articleform.vue";
import axios from "axios";


export default {
    name: "repositori",
    components: {
      Navbar,
      Side,
      Spinner,
      ArticleForm,
    },
    data() {
        return {
            repository: [],
            articleForms: [],
            searchQuery: '',
            imagePreview: null,
            id: '',
            name: '',
            address: '',
            detail: '',
            itemsPerPage: 5,
            currentPage: 1,
        };
    },

    computed: {
        paginatedFilteredRepository() {
        const searchQuery = this.searchQuery.toLowerCase().trim();
        const filteredResults = this.repository.filter(repo => {
            return (
                repo.id.toString().includes(searchQuery) ||
                repo.name.toLowerCase().includes(searchQuery) ||
                repo.lokasi.toLowerCase().includes(searchQuery) ||
                repo.description.toLowerCase().includes(searchQuery)
            );
        });

        const startIndex = (this.currentPage - 1) * this.itemsPerPage;
        const endIndex = startIndex + this.itemsPerPage;
        return filteredResults.slice(startIndex, endIndex);
    },
    totalPagesForFilteredResults() {
        return Math.ceil(this.filteredRepository.length / this.itemsPerPage);
    },
        totalPages() {
            return Math.ceil(this.repository.length / this.itemsPerPage);
        },
    },

methods: {
    setRepository(data) {
      this.repository = data;
    },

    showDeleteConfirmation(repositoryId) {
      this.deleteId = repositoryId;
    },

    addArticleForm() {
      if (this.articleForms.length < 6) {
        this.articleForms.push({});
      }
    },

     deleteArticleForm(index) {
      this.articleForms.splice(index, 1);
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
      this.address = '';
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
      .get("http://localhost:3000/repositories")
      .then((response) => this.setRepository(response.data))
      .catch((error) => console.log(error));

      $('#addDataModal').on('hidden.bs.modal', () => {
        this.resetForm();
    });
  },

  };
</script>
