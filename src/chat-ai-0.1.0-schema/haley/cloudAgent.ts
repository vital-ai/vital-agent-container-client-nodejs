import { CloudApp } from './cloudApp';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#CloudAgent
 */
export class CloudAgent extends CloudApp {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley#CloudAgent';
  }

  /**
   * Get property definitions for CloudAgent
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
