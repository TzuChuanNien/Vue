<template>
  <div>
    <Header />
    <!--Radio-Button-Group-Start-->
    <div class="flex justify-end top-30 right-1 z-50 bg-white p-3">
      <div class="form-check form-check-inline">
        <input
          class="form-check-input form-check-input rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
          type="radio"
          value="0"
          v-model="style"
        />
        <ViewGridIcon class="h-5 w-5" aria-hidden="true" />
      </div>
      <div class="form-check form-check-inline">
        <input
          class="form-check-input form-check-input rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
          type="radio"
          value="1"
          v-model="style"
        />
        <ViewListIcon class="h-5 w-5" aria-hidden="true" />
      </div>
    </div>
    <!--Radio-Button-Group-End-->
    <div class="row flex">
      <div class="mx-auto top-80 justify-content: center">
        <!--Card-Style-Start-->
        <div class="row flex">
          <div
            v-if="style == 0"
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6"
          >
            <div
              v-for="user in data.pageItem"
              :key="user"
              :class="`${
                user.gender == 'female' ? 'bg-red-100' : 'bg-blue-100'
              } py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6`"
            >
              <img
                class="block mx-auto h-18 rounded-full sm:mx-0 sm:shrink-0"
                :src="user.picture.medium"
                alt="User Picture"
              />
              <div class="text-center space-y-2 sm:text-left">
                <div class="space-y-0.5">
                  <p class="text-lg text-black font-semibold">
                    {{ user.name.last }}
                  </p>
                  <p class="text-gray-500 font-medium">
                    {{ user.id.value !== null ? user.id.value : ' ' }}
                  </p>
                </div>
                <button
                  @click="dialog = true"
                  class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
                >
                  Message
                </button>
              </div>
            </div>
          </div>
          <!-- Card-Style-End-->

          <!--List-Style-Start-->
          <div v-else class="flex mx-auto">
            <table class="min-w-full leading-normal">
              <tbody v-for="user in data.pageItem" :key="user">
                <tr>
                  <td class="px-5 py-5 bg-white text-sm">
                    <div class="flex">
                      <div class="flex-shrink-0 w-10 h-10">
                        <img
                          class="w-full h-full rounded-full"
                          :src="user.picture.large"
                          alt=""
                        />
                      </div>
                      <div class="ml-3">
                        <p class="text-gray-900 whitespace-no-wrap text">
                          {{ user.name.last }}
                        </p>
                        <p class="text-gray-600 whitespace-no-wrap">
                          {{ user.id.value !== null ? user.id.value : '' }}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td class="px-5 py-5 bg-white text-sm text-left">
                    <span
                      class="relative inline-block px-3 py-1 font-semibold text-white leading-tight capitalize"
                    >
                      <span
                        aria-hidden
                        :class="`absolute inset-0 ${
                          user.gender == 'female' ? 'bg-red-500' : 'bg-blue-500'
                        } opacity-50 rounded-full `"
                      >
                      </span
                      ><span class="relative">{{ user.gender }}</span>
                    </span>
                  </td>
                  <td class="px-5 py-5 bg-white text-sm text-left">
                    <p class="text-gray-600 whitespace-no-wrap">
                      {{ user.email }}
                    </p>
                  </td>
                  <td class="px-5 py-5 bg-white text-sm text-left">
                    <span
                      class="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight"
                    >
                      <span class="relative">{{ user.phone }}</span>
                    </span>
                  </td>
                  <td class="px-5 py-5 bg-white text-sm text-right">
                    <button
                      @click="toggleModal"
                      type="button"
                      class="inline-block text-gray-500 hover:text-gray-700"
                      title="see more"
                    >
                      <AnnotationIcon class="h-5 w-5" aria-hidden="true" />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!--List-Style-End-->
        <!--Dialog-Start-->
        <div
          class="fixed z-10 overflow-y-auto top-0 w-full left-0"
          v-show="dialog"
        >
          <div
            class="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0"
          >
            <div class="fixed inset-0 transition-opacity">
              <div
                class="absolute inset-0 bg-gray-900 opacity-75"
                @click="dialog = false"
              />
            </div>
            <span class="hidden sm:inline-block sm:align-middle sm:h-screen"
              >&#8203;</span
            >
            <div
              class="inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              <div
                class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md"
              >
                <h5
                  class="text-xl font-medium leading-normal text-gray-800"
                  id="exampleModalLabel"
                >
                  Tell something
                </h5>
                <button
                  type="button"
                  class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                  @click="dialog = false"
                  aria-label="Close"
                >
                  X
                </button>
              </div>
              <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <label>Content</label>
                <input type="text" class="w-full bg-gray-100 p-2 mt-2 mb-3" />
              </div>
              <div class="bg-gray-200 px-4 py-3 text-right">
                <button
                  type="button"
                  class="py-2 px-4 bg-gray-500 text-white rounded hover:bg-gray-700 mr-2"
                  @click="toggleModal"
                >
                  <i class="fas fa-times"></i> Cancel
                </button>
                <button
                  type="button"
                  class="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700 mr-2"
                  @click="toggleModal"
                >
                  <i class="fas fa-plus"></i> submit
                </button>
              </div>
            </div>
          </div>
        </div>
        <!--Dialog-End-->
      </div>
    </div>
    <v-pagination
      class="items-center justify-center"
      style="padding: 10px"
      v-model="data.currentPage"
      :pages="data.totalPage"
      :range-size="1"
      active-color="#DCEDFF"
      @update:modelValue="page"
    />
    <!-- <Pagination/> -->
  </div>
</template>

<script>
import {
  ViewGridIcon,
  ViewListIcon,
  AnnotationIcon,
} from '@heroicons/vue/solid';
import { ref, reactive, onMounted } from 'vue';
import Header from '@/components/Header.vue';
import { getRandomUser } from '@/api/randomApi';
import VPagination from '@hennge/vue3-pagination';
import '@hennge/vue3-pagination/dist/vue3-pagination.css';
export default {
  name: 'Home',
  components: {
    Header,
    ViewGridIcon,
    ViewListIcon,
    AnnotationIcon,
    VPagination,
  },
  setup() {
    const data = reactive({
      userList: [],
      totalPage: null,
      currentPage: 1,
      pageItem: [],
    });
    const style = ref(0);
    const dialog = ref(false);
    onMounted(() => {
      methods.initAsync();
    });
    const methods = {
      async initAsync() {
        try {
          data.userList = await this.getRandomUserAsync();
          data.totalPage = parseInt(data.userList.length / 30);
          if (data.userList.length % 30 > 0) {
            data.totalPage = data.totalPage + 1;
          }
          data.currentPage = 1;
          let maxPageIndex = data.currentPage * 30;
          let minPageIndex =
            data.currentPage == 1 ? 1 : (data.currentPage - 1) * 30;
          data.userList.forEach((element, index) => {
            element.id.value = parseInt(Math.random() * 10000); //由於random ID 常有亂碼 故自動生成不特定但格式固定亂數
            const num = index + 1;
            if (num >= minPageIndex && num <= maxPageIndex) {
              data.pageItem.push(element);
            }
          });
        } catch (err) {
          console.log(err);
        }
      },
      async getRandomUserAsync() {
        let amount = 3009;
        let resp = await getRandomUser(amount);
        return resp.data.results || [];
      },
    };

    const page = () => {
      data.pageItem = [];
      let maxPageIndex = data.currentPage * 30;
      let minPageIndex =
        data.currentPage == 1 ? 1 : (data.currentPage - 1) * 30;
      data.userList.forEach((element, index) => {
        const num = index + 1;
        if (num >= minPageIndex && num < maxPageIndex) {
          data.pageItem.push(element);
        }
      });
    };
    const toggleModal = () => {
      dialog.value = !dialog.value;
    };
    return { data, page, style, dialog, toggleModal, methods };
  },
};
</script>
