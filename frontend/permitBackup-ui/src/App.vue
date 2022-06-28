<template>
  <div>
    <Menubar :model="items">

    </Menubar>
  </div>
  <router-view></router-view>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          label: "Customers",
          to: { name: "customers" },
        },
      ],
    };
  },
};
</script>
