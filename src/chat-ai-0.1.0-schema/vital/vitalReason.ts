import { VITAL_Annotation } from './vitalAnnotation';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital#VITAL_Reason
 */
export class VITAL_Reason extends VITAL_Annotation {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital#VITAL_Reason';
  }

  /**
   * Get property definitions for VITAL_Reason
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
