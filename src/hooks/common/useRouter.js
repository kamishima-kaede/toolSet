import { useRouter, useRoute } from 'vue-router';

export default function () {
  const router = useRouter();
  const route = useRoute();
  return {
    router,
    route,
  };
}
