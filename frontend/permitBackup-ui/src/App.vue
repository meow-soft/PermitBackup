<template>
  <div>
    <Menubar :model="items">

    </Menubar>
  </div>
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
