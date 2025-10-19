import { UserInterfaceCommandMessage } from './userInterfaceCommandMessage';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#RefreshChannelCommand
 */
export class RefreshChannelCommand extends UserInterfaceCommandMessage {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#RefreshChannelCommand';
  }

  /**
   * Get property definitions for RefreshChannelCommand
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
