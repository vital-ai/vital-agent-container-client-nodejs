import { AgentInstallConfiguration } from './agentInstallConfiguration';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#HaleyBotInstallConfiguration
 */
export class HaleyBotInstallConfiguration extends AgentInstallConfiguration {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#HaleyBotInstallConfiguration';
  }

  /**
   * Get property definitions for HaleyBotInstallConfiguration
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
