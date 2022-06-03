function DynamicArray(capacity) {
    if (capacity < 0) {
        throw new Error("Capacity must be greater than 0");
    }

    // The array.
    this.array = [];
    this.len = 0; //length shown to the user
    this.capacity = capacity; //actual length.

    // Get the size of the array
    this.size = () => {
        return this.len;
    };

    // Checks if the array is empty
    this.isEmpty = () => {
        return this.size() === 0;
    };
}

// const dynamicArray = new DynamicArray("dynamicArray");
// console.log(dynamicArray.getName());

const array = new DynamicArray(5);
