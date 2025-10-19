import { VitalDataScript } from './vitalDataScript';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital#Job
 */
export class Job extends VitalDataScript {
  public callable?: boolean;
  public intervalTimeUnit?: string;
  public nextExecutionTime?: string | Date;
  public interval?: number;
  public paused?: boolean;
  public cronExpression?: string;
  public lastExecutionTime?: string | Date;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital#Job';
  }

  /**
   * Get property definitions for Job
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital#isCallable',
        tsPropertyName: 'callable',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital#hasIntervalTimeUnit',
        tsPropertyName: 'intervalTimeUnit',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital#hasNextExecutionTime',
        tsPropertyName: 'nextExecutionTime',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital#hasInterval',
        tsPropertyName: 'interval',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital#isPaused',
        tsPropertyName: 'paused',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital#hasCronExpression',
        tsPropertyName: 'cronExpression',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital#hasLastExecutionTime',
        tsPropertyName: 'lastExecutionTime',
        type: 'string',
        required: false,
        format: 'date-time'
      }
    ];
  }


}
