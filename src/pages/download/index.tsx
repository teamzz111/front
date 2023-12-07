import AnalyticsService from "@/actions/analytics";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Download = () => {
  const router = useRouter();
  const { mutate } = useMutation({
    mutationFn: AnalyticsService.registerVisit,
  });

  useEffect(() => {
    mutate(router.pathname);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div>Página de descarga</div>;
};

export default Download;
