import { HaleyProcessorRequest } from './haleyProcessorRequest';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#HaleyMindProcessorRequest
 */
export class HaleyMindProcessorRequest extends HaleyProcessorRequest {
  public haleyMindServiceRequestTypeURI?: string;
  public inferenceUpdate?: string;
  public haleyMindAppURI?: string;
  public haleyMindServiceMetaQLName?: string;
  public haleyMindServiceRuleURI?: string;
  public haleyMindServiceRuleName?: string;
  public haleyMindContextIdentifier?: string;
  public haleyMindProcessorRequestTypeURI?: string;
  public inferenceQuery?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley#HaleyMindProcessorRequest';
  }

  /**
   * Get property definitions for HaleyMindProcessorRequest
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasHaleyMindServiceRequestTypeURI',
        tsPropertyName: 'haleyMindServiceRequestTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasInferenceUpdate',
        tsPropertyName: 'inferenceUpdate',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasHaleyMindAppURI',
        tsPropertyName: 'haleyMindAppURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasHaleyMindServiceMetaQLName',
        tsPropertyName: 'haleyMindServiceMetaQLName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasHaleyMindServiceRuleURI',
        tsPropertyName: 'haleyMindServiceRuleURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasHaleyMindServiceRuleName',
        tsPropertyName: 'haleyMindServiceRuleName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasHaleyMindContextIdentifier',
        tsPropertyName: 'haleyMindContextIdentifier',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasHaleyMindProcessorRequestTypeURI',
        tsPropertyName: 'haleyMindProcessorRequestTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasInferenceQuery',
        tsPropertyName: 'inferenceQuery',
        type: 'string',
        required: false
      }
    ];
  }


}
