import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGIndexDocumentAttempt
 */
export class KGIndexDocumentAttempt extends VITAL_Node {
  public kGIndexDocumentAttemptStatusTypeURI?: string;
  public documentAttemptStatus?: string;
  public documentCorrectedURL?: string;
  public documentOriginalURL?: string;
  public documentAttemptDateTime?: string | Date;
  public documentAttemptStatusCode?: number;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-kg#KGIndexDocumentAttempt';
  }

  /**
   * Get property definitions for KGIndexDocumentAttempt
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGIndexDocumentAttemptStatusTypeURI',
        tsPropertyName: 'kGIndexDocumentAttemptStatusTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasDocumentAttemptStatus',
        tsPropertyName: 'documentAttemptStatus',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasDocumentCorrectedURL',
        tsPropertyName: 'documentCorrectedURL',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasDocumentOriginalURL',
        tsPropertyName: 'documentOriginalURL',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasDocumentAttemptDateTime',
        tsPropertyName: 'documentAttemptDateTime',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasDocumentAttemptStatusCode',
        tsPropertyName: 'documentAttemptStatusCode',
        type: 'number',
        required: false
      }
    ];
  }


}
