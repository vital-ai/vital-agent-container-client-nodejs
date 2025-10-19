import { HaleyProcessorRequest } from './haleyProcessorRequest';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#HaleyDocGenProcessorRequest
 */
export class HaleyDocGenProcessorRequest extends HaleyProcessorRequest {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley#HaleyDocGenProcessorRequest';
  }

  /**
   * Get property definitions for HaleyDocGenProcessorRequest
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
