import { AgentInstanceDeployment } from './agentInstanceDeployment';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#HaleyBotInstanceDeployment
 */
export class HaleyBotInstanceDeployment extends AgentInstanceDeployment {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#HaleyBotInstanceDeployment';
  }

  /**
   * Get property definitions for HaleyBotInstanceDeployment
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
