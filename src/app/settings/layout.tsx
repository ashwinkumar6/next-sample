import React from "react";

import styles from "../layout.module.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.settings}>
      <div>Settings layout</div>
      <div>{children}</div>
    </div>
  );
}
