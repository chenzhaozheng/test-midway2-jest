import { App, Configuration } from '@midwayjs/decorator';
import * as swagger from '@midwayjs/swagger';
import * as orm from '@midwayjs/orm';
// eslint-disable-next-line node/no-extraneous-import
import { ILifeCycle, IMidwayContainer } from '@midwayjs/core';
import { Application } from 'egg';
import 'tsconfig-paths/register';

@Configuration({
  imports: [swagger, orm],
})
export class ContainerConfiguration implements ILifeCycle {
  @App()
  app: Application;

  async onReady(container: IMidwayContainer): Promise<void> {
  }

  async onStop(): Promise<void> {}
}
