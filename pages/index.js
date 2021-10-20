import styled from 'styled-components';
import { Sidebar } from '../src/components/common/Sidebar';
import { Header } from '../src/components/common/Header';

export default function Home() {
  return (
    <div style={{ display: 'flex', flex: 1 }}>
      <Sidebar />
      <Header />
    </div>
  );
}
