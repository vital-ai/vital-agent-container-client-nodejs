import { HaleyAccount } from './haleyAccount';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#AgentDeveloper
 */
export class AgentDeveloper extends HaleyAccount {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley#AgentDeveloper';
  }

  /**
   * Get property definitions for AgentDeveloper
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
