import { HaleyMindRequest } from '../haley/haleyMindRequest';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-ml#PurgeDataMindRequest
 */
export class PurgeDataMindRequest extends HaleyMindRequest {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-ml#PurgeDataMindRequest';
  }

  /**
   * Get property definitions for PurgeDataMindRequest
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
