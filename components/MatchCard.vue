<template>
  <div class="shadow-lg mt-4">
    <div class="bg-chathams-blue flex items-center justify-between px-2 py-1 rounded-t text-white">
      <div class="flex items-center justify-between space-x-2">
        <font-awesome-icon :icon="['fas', 'futbol']" />

        <p class="font-bold italic uppercase">UEFA Euro 2020</p>
      </div>

      <font-awesome-icon :icon="['fas', 'redo-alt']" />
    </div>
    
    <a href="javascript:void(0)">
      <div class="bg-white flex font-bold items-center justify-between p-2 relative shadow-md">
        <span>Italy</span>

        <div class="text-center">
          <span class="block font-normal">27/06</span>

          <span class="block">--:--</span>
        </div>

        <span>Austria</span>
      </div>
    </a>

    <div class="text-center">
      <div class="flex">
        <div class="bg-alabaster flex flex-2 flex-col p-2 space-y-2">
          <span class="text-boulder">FT Handicap</span>

          <div class="flex items-center space-x-2">
            <span>H</span>

            <div class="bg-white flex flex-1 flex-col h-10 justify-center px-2 py-1 rounded shadow">
              <span class="text-dodger-blue">-1.00</span>
              <span>0.88</span>
            </div>

            <div class="bg-white flex flex-1 flex-col h-10 justify-center px-2 py-1 rounded shadow">
              <span class="text-dodger-blue">-0.75</span>
              <span>0.67</span>
            </div>
          </div>

          <div class="flex items-center space-x-2">
            <span>A</span>

            <div class="bg-white flex flex-1 flex-col h-10 justify-center px-2 py-1 rounded shadow">
              <span>-0.95</span>
            </div>

            <div class="bg-white flex flex-1 flex-col h-10 justify-center px-2 py-1 rounded shadow">
              <span>-0.75</span>
            </div>
          </div>
        </div>

        <div class="bg-wild-sand flex flex-2 flex-col p-2 space-y-2">
          <span class="text-boulder">FT Over/Under</span>

          <div class="flex items-center space-x-2">
            <span>H</span>

            <div class="bg-white flex flex-1 flex-col h-10 justify-center px-2 py-1 rounded shadow">
              <span class="text-dodger-blue">-1.00</span>
              <span>0.88</span>
            </div>

            <div class="bg-white flex flex-1 flex-col h-10 justify-center px-2 py-1 rounded shadow">
              <span class="text-dodger-blue">-0.75</span>
              <span>0.67</span>
            </div>
          </div>

          <div class="flex items-center space-x-2">
            <span>A</span>

            <div class="bg-white flex flex-1 flex-col h-10 justify-center px-2 py-1 rounded shadow">
              <span>-0.95</span>
            </div>

            <div class="bg-white flex flex-1 flex-col h-10 justify-center px-2 py-1 rounded shadow">
              <span>-0.75</span>
            </div>
          </div>
        </div>

        <div class="bg-alabaster flex flex-1 flex-col p-2 space-y-2">
          <span class="text-boulder">FT 1X2</span>

          <div class="flex items-center space-x-2">
            <span>H</span>

            <div class="bg-white flex flex-1 flex-col h-10 justify-center px-2 py-1 rounded shadow">
              <span>-1.00</span>
            </div>
          </div>

          <div class="flex items-center space-x-2">
            <span>A</span>

            <div class="bg-white flex flex-1 flex-col h-10 justify-center px-2 py-1 rounded shadow">
              <span>-0.95</span>
            </div>
          </div>

          <div class="flex items-center space-x-2">
            <span>D</span>

            <div class="bg-white flex flex-1 flex-col h-10 justify-center px-2 py-1 rounded shadow">
              <span>-0.95</span>
            </div>
          </div>
        </div>
      </div>

      <div class="flex">
        <div class="bg-alabaster flex flex-2 flex-col p-2 space-y-2">
          <span class="text-boulder">HT Handicap</span>

          <div class="flex items-center space-x-2">
            <span>H</span>

            <div class="bg-white flex flex-1 flex-col h-10 justify-center px-2 py-1 rounded shadow">
              <span class="text-dodger-blue">-1.00</span>
              <span>0.88</span>
            </div>

            <div class="bg-white flex flex-1 flex-col h-10 justify-center px-2 py-1 rounded shadow">
              <span class="text-dodger-blue">-0.75</span>
              <span>0.67</span>
            </div>
          </div>

          <div class="flex items-center space-x-2">
            <span>A</span>

            <div class="bg-white flex flex-1 flex-col h-10 justify-center px-2 py-1 rounded shadow">
              <span>-0.95</span>
            </div>

            <div class="bg-white flex flex-1 flex-col h-10 justify-center px-2 py-1 rounded shadow">
              <span>-0.75</span>
            </div>
          </div>
        </div>

        <div class="bg-wild-sand flex flex-2 flex-col p-2 space-y-2">
          <span class="text-boulder">HT Over/Under</span>

          <div class="flex items-center space-x-2">
            <span>H</span>

            <div class="bg-white flex flex-1 flex-col h-10 justify-center px-2 py-1 rounded shadow">
              <span class="text-dodger-blue">-1.00</span>
              <span>0.88</span>
            </div>

            <div class="bg-white flex flex-1 flex-col h-10 justify-center px-2 py-1 rounded shadow">
              <span class="text-dodger-blue">-0.75</span>
              <span>0.67</span>
            </div>
          </div>

          <div class="flex items-center space-x-2">
            <span>A</span>

            <div class="bg-white flex flex-1 flex-col h-10 justify-center px-2 py-1 rounded shadow">
              <span>-0.95</span>
            </div>

            <div class="bg-white flex flex-1 flex-col h-10 justify-center px-2 py-1 rounded shadow">
              <span>-0.75</span>
            </div>
          </div>
        </div>

        <div class="bg-alabaster flex flex-1 flex-col p-2 space-y-2">
          <span class="text-boulder">HT 1X2</span>

          <div class="flex items-center space-x-2">
            <span>H</span>

            <div class="bg-white flex flex-1 flex-col h-10 justify-center px-2 py-1 rounded shadow">
              <span>-1.00</span>
            </div>
          </div>

          <div class="flex items-center space-x-2">
            <span>A</span>

            <div class="bg-white flex flex-1 flex-col h-10 justify-center px-2 py-1 rounded shadow">
              <span>-0.95</span>
            </div>
          </div>

          <div class="flex items-center space-x-2">
            <span>D</span>

            <div class="bg-white flex flex-1 flex-col h-10 justify-center px-2 py-1 rounded shadow">
              <span>-0.95</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="bg-white border-b-6 border-chathams-blue flex items-center justify-between p-2 relative rounded-b shadow-t-lg">
      <div class="flex space-x-2">
        <font-awesome-icon
          :icon="['fas', 'chart-bar']"
          size="2x"
        />

        <font-awesome-icon
          :icon="['fas', 'video']"
          size="2x"
        />

        <font-awesome-icon
          :icon="['fas', 'futbol']"
          size="2x"
        />

        <font-awesome-icon
          :icon="['fas', 'calendar-alt']"
          size="2x"
        />
      </div>

      <button class="bg-chathams-blue p-2 rounded text-white">
        51

        <font-awesome-icon
          :icon="['fas', 'plus-circle']"
          class="ml-1"  
        />
      </button>
    </div>
  </div>
</template>