import { AgentInstall } from './agentInstall';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#HaleyBotInstall
 */
export class HaleyBotInstall extends AgentInstall {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#HaleyBotInstall';
  }

  /**
   * Get property definitions for HaleyBotInstall
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
