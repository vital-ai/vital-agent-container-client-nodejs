import { AgentPolicy } from './agentPolicy';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#HaleyBotPolicy
 */
export class HaleyBotPolicy extends AgentPolicy {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#HaleyBotPolicy';
  }

  /**
   * Get property definitions for HaleyBotPolicy
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
