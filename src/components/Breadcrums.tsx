"use client";
import { usePathname } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Fragment } from "react";

function Breadcrums() {
  const path = usePathname();
  console.log(path)
  const segments = path.split("/").filter(Boolean);

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        {/* <BreadcrumbSeparator /> */}
        {segments.map((segment, index) => {
          if (!segment) return null;
          const href = `/${segments.slice(0, index + 1).join("/")}`;
          // console.log(href)
          const isLast = index===segments.length -1;
          return (
            <Fragment key={segment}>
              <BreadcrumbSeparator></BreadcrumbSeparator>
            <BreadcrumbItem>
            {isLast? (
              <BreadcrumbPage>{segment}</BreadcrumbPage>
            ) : (
              <BreadcrumbLink href={href}>
                <BreadcrumbPage>{segment}</BreadcrumbPage>
              </BreadcrumbLink>
            )}
            </BreadcrumbItem>
            </Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
export default Breadcrums;
