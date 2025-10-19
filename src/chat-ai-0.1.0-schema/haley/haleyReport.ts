import { Dataset } from '../vital-core/dataset';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#HaleyReport
 */
export class HaleyReport extends Dataset {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley#HaleyReport';
  }

  /**
   * Get property definitions for HaleyReport
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
