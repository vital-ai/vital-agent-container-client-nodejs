import { CloudApp } from './cloudApp';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#CloudWebApp
 */
export class CloudWebApp extends CloudApp {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley#CloudWebApp';
  }

  /**
   * Get property definitions for CloudWebApp
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
