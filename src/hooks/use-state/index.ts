import { ref, UnwrapRef } from "vue";
export function useState<T>(data: T): [() => UnwrapRef<T>, (newState: T) => T] {
  const state = ref<T>(data);
  function setVal(data: T) {
    state.value = data as UnwrapRef<T>;
    return data;
  }
  function getVal(): UnwrapRef<T> {
    return state.value;
  }
  return [getVal, setVal];
}
