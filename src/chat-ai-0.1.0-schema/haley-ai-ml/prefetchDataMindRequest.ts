import { HaleyMindRequest } from '../haley/haleyMindRequest';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-ml#PrefetchDataMindRequest
 */
export class PrefetchDataMindRequest extends HaleyMindRequest {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-ml#PrefetchDataMindRequest';
  }

  /**
   * Get property definitions for PrefetchDataMindRequest
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
