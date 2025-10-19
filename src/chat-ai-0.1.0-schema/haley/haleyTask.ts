import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#HaleyTask
 */
export class HaleyTask extends VITAL_Node {
  public scheduledExecutionTime?: string | Date;
  public stackTrace?: string;
  public lastAttemptTime?: string | Date;
  public status?: string;
  public defaultRecurrenceTime?: number;
  public owner?: string;
  public statusMessage?: string;
  public topPriority?: boolean;
  public exceptionMessage?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley#HaleyTask';
  }

  /**
   * Get property definitions for HaleyTask
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasScheduledExecutionTime',
        tsPropertyName: 'scheduledExecutionTime',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasStackTrace',
        tsPropertyName: 'stackTrace',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasLastAttemptTime',
        tsPropertyName: 'lastAttemptTime',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasStatus',
        tsPropertyName: 'status',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasDefaultRecurrenceTime',
        tsPropertyName: 'defaultRecurrenceTime',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasOwner',
        tsPropertyName: 'owner',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasStatusMessage',
        tsPropertyName: 'statusMessage',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#isTopPriority',
        tsPropertyName: 'topPriority',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasExceptionMessage',
        tsPropertyName: 'exceptionMessage',
        type: 'string',
        required: false
      }
    ];
  }


}
